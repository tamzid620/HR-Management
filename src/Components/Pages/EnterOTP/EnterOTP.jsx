import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EnterOTP = () => {
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState("");
  const [submitOtp, setSubmitOtp] = useState("");

  useEffect(() => {
    const storedPhoneNo = localStorage.getItem("phoneNo");
    const storedEmail = localStorage.getItem("email");
    if (!storedPhoneNo || !storedEmail) {
      navigate("/userSignup");
      return;
    } else {
      setPhoneNo(storedPhoneNo);
    }
  }, [navigate]);

  // handleOtpChange section ------------
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    console.log(otp);
  };
  // handleOtpSubmit section ---------------
  const handleOtpSubmit = () => {
    const data = new FormData();
    data.append( 'phoneNo',phoneNo), 
    data.append("otp", otp);
    console.log(phoneNo,otp);

    axios
      .post("https://consultantbackend.softplatoon.com/api/otp-verify", data)
      .then((res) => {
        const data = res.data;
        setSubmitOtp(data);
        console.log(phoneNo,otp);
        if (res.data.status === "201") {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
          const localStorageData = {
            name: localStorage.getItem("name"),
            fatherName: localStorage.getItem("fatherName"),
            motherName: localStorage.getItem("motherName"),
            email: localStorage.getItem("email"),
            phoneNo: localStorage.getItem("phoneNo"),
            birthDate: localStorage.getItem("birthDate"),
            image: localStorage.getItem("image"),
          };
          axios
          .post("https://consultantbackend.softplatoon.com/api/save-leed", localStorageData)
          .then((res) => {
            if (res.data.status === "201") {
              Swal.fire({
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 2500,
              });
              navigate('/confirmPassword')
            }else{
              Swal.fire({
                icon: "error",
                title: res.data.message,
                showConfirmButton: false,
                timer: 2500,
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "success",
              title: console.error("Error posting data:", error),
              showConfirmButton: false,
              timer: 2500,
            });
          });
        }
        if (res.data.status === "401") {
          Swal.fire({
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
        }
        if (res.data.status === "403") {
          Swal.fire({
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching OTP:", error);
      });
    };
    console.log(submitOtp);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid lg:grid-cols-1 md:grid-cols-2 sm: grid-cols-2">
        {/* phoneNo Input  */}
        <div>
          <label htmlFor="phoneNo">Phone Number:</label> <br />
          <input
            required
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            placeholder="Enter Phone Number"
            type="text"
            name="phoneNo"
            id="phoneNo"
            value={phoneNo}
            readOnly
          />
        </div>
        {/* OTP Input  */}
        <div>
          <label htmlFor="otp">Enter OTP:</label>
          <br />
          <input
            required
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            placeholder="Your OTP code"
            type="number"
            name="otp"
            id="otp"
            onChange={handleOtpChange}
          />
        </div>
        {/* submit button div  */}
        <div className="flex justify-center">
          <button
            onClick={handleOtpSubmit}
            className=" bg-[#25476a] hover:bg-gray-500 text-white text-md hover:text-black py-1 px-2 rounded focus:outline-none focus:shadow-outline  mt-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
