import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetailsInfo = () => {
  const [getToken, setGetToken] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have to Login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/userLogin");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
      axios.get("https://backend.ap.loclx.io/api/login", {
         headers :headers
        })
      .then(res => {
        setGetToken(res.data) ;
      })
      .catch(error => {
        console.error("Error uploading image:", error);
      });
    }
  }, [navigate]);

  return (
    <div className="container mx-auto">
      {/* user informaiton div */}
      <div className=" leading-[50px] font-semibold ">
        <p className="user_Details_paragraph">
          <label>Name:</label>
          <input
            type="text"
            value="Tamzid"
            readOnly
            className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
          />
        </p>
        <p className="user_Details_paragraph">
          <label>Father_Name:</label>
          <input
            type="text"
            readOnly
            className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
          />
        </p>
        <p className="user_Details_paragraph">
          <label>Mother_Name:</label>
          <input
            type="text"
            readOnly
            className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
          />
        </p>
        <p className="user_Details_paragraph">
          <label>Birth_Date:</label>
          <input
            type="text"
            readOnly
            className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
          />
        </p>
        <p className="user_Details_paragraph">
          <label>Email:</label>
          <input
            type="text"
            readOnly
            className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
          />
        </p>
      </div>
       
      {/* Educational Information div  */}
      <div className="my-[50px]  leading-[50px] font-semibold ">
        <h1 className="text-3xl mb-[20px]">Educational Information</h1>
        {/* Add Educational button -------------- */}
        <button  className="btn btn-sm btn-success text-white ">
          Add Educational
        </button>
      <div>

  <div>
    {/* Degree Name */}
    <div className="user_Details_paragraph">
      <label>Degree_Name:</label>
      <input
        type="text"
        className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
      />
    </div>
    {/* Institution Name */}
    <div className="user_Details_paragraph">
      <label>Institution_Name:</label>
      <input
        type="text"
        className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
      />
    </div>
    <section className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1">
    {/* Certificates */}
    <div className="user_Details_paragraph">
      <label>Certificates:</label>
      <input
        type="file"
        className="user_Details_span file-input  file-input-sm w-full max-w-x"
      />
    </div>
    {/* MarkSheet */}
    <div className="user_Details_paragraph">
      <label>MarkSheet:</label>
      <input
        type="file"
        className="user_Details_span file-input  file-input-sm w-full max-w-x"
      />
    </div>
    </section>
  </div>

      </div>
{/* Other DOcuments div */}
        <h1 className="text-3xl my-[20px]">Other Documents</h1>
        <div>
        {/* Add Documents button -------------- */}
        <button className="btn btn-sm btn-info text-white ">
          Add Documents
        </button>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1">
              <div className="user_Details_paragraph">
                <label>Documents_Name:</label>
                <input
                  type="text"
                  name="documentName"
                  className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
                />
              </div>
              <div className="user_Details_paragraph">
                <label>File:</label>
                <input
                  type="file"
                  name= "documentFile"
                  className="user_Details_span file-input  file-input-sm w-full max-w-x"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsInfo;
