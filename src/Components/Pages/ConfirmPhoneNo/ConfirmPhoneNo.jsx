import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ConfirmPhoneNo = () => {
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState("");
  const [generateOtp, setGenerateOtp] = useState("");

  useEffect(() => {
    const storedPhoneNo = localStorage.getItem("phoneNo");
    const storedEmail = localStorage.getItem("email");
    if (!storedPhoneNo || !storedEmail) {
      navigate("/userSignup");
      return;
    }else{
      setPhoneNo(storedPhoneNo);
    }
  }, [navigate]);

  const handlePhoneNoChange = (e) => {
    // setPhoneNo(e.target.value)
    const inputValue = e.target.value;
    if (/^\+880\d*$/.test(inputValue) || /^\d*$/.test(inputValue)) {
      setPhoneNo(inputValue);
      localStorage.setItem("phoneNo", inputValue);
    }
  };

  const handleSubmit = () => {
    axios
      .post("https://backend.ap.loclx.io/api/otp-generate")
      .then((res) => {
        const data = res.data;
        setGenerateOtp(data);
        console.log(data);
        console.log("button clicked"); 
      })
      .catch((error) => {
        console.error("Error fetching OTP:", error); 
      });
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid lg:grid-cols-1 md:grid-cols-2 sm: grid-cols-2">
        {/* phoneNo Input  */}
        <div>
          <label htmlFor="phoneNo">Phone Number:</label> <br />
          <input
            required
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            type="text"
            name="phoneNo"
            id="phoneNo"
            value={phoneNo}
            onChange={handlePhoneNoChange}
          />
        </div>
        {/* submit button div  */}
        <div className="flex justify-center">
          {/* <Link to="/enterOtp"> */}
            <button
              className=" bg-[#25476a] hover:bg-gray-500 text-white text-md hover:text-black py-1 px-2 rounded focus:outline-none focus:shadow-outline  mt-3"
              onClick={handleSubmit}
            >
              Generate OTP
            </button>
          {/* </Link> */}
        </div>
      </div>
     
    </div>
  );
};

export default ConfirmPhoneNo;
