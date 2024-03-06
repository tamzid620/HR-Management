import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetailsInfo = () => {
  const [eduInfo, setEduInfo] = useState([]);
  const [docInfo, setDocInfo] = useState([]);

  const navigate = useNavigate();

  // Check for token useEffect
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
    }
  }, [navigate]);
  const handleAddEduInfo = () => {};
  const handleAddDocInfo = () => {};

  return (
    <div className="container mx-auto">
      {/*------------------------user informaiton div--------------- */}
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

      {/* form div  */}
      <div className=" my-[50px] leading-[50px] font-semibold ">
        {/*------------------ Educational Information div---------------------- */}
        <div className="border border-green-500">
        <h1 className="text-3xl">Educational Information</h1>
        {/* Document Type */}
        <div className="user_Details_paragraph">
              <label>Document_Type:</label>
              <input
                type="text"
                name="documentName"
                value="eduInfo"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
              />
            </div>
          {/* Degree Name */}
          <div className="user_Details_paragraph">
            <label>Degree_Name:</label>
            <input
              type="text"
              name="degreeName"
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
            />
          </div>
          {/* Institution Name */}
          <div className="user_Details_paragraph">
            <label>Institution_Name:</label>
            <input
              type="text"
              name="institutionName"
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
            />
          </div>
          <section className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1">
            {/* Certificates */}
            <div className="user_Details_paragraph">
              <label>Certificates:</label>
              <input
                type="file"
                name="certificates"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
              />
            </div>
            {/* MarkSheet */}
            <div className="user_Details_paragraph">
              <label>MarkSheet:</label>
              <input
                type="file"
                name="markSheet"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
              />
            </div>
          </section>
          {/* handleAddEduInfo button section  */}
          <div className="flex justify-center mt-[30px]">
            <button
              onClick={handleAddEduInfo}
              className=" btn btn-success text-white"
            >
              Submit
            </button>
          </div>
        </div>
        {/*------------------ Other Documents div---------------------- */}
        <div className="border border-blue-500">
        <h1 className="text-3xl mt-[100px]">Other Documents</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {/* Document Type */}
            <div className="user_Details_paragraph">
              <label>Document_Type:</label>
              <input
                type="text"
                name="documentName"
                value="docInfo"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
              />
            </div>
            {/* Document Name */}
            <div className="user_Details_paragraph">
              <label>Document_Name:</label>
              <input
                type="text"
                name="documentName"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
              />
            </div>
            {/* Document File */}
            <div className="user_Details_paragraph">
              <label>File:</label>
              <input
                type="file"
                name="docFile"
                className="user_Details_span file-input file-input-sm w-full max-w-x"
              />
            </div>
          </div>
          {/* handleAddDocInfo section  */}
          <div className="flex justify-center mt-[30px]">
            <button
              onClick={handleAddDocInfo}
              className="btn btn-info text-white "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsInfo;
