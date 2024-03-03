import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetailsInfo = () => {
  const [eduInfo, setEduInfo] = useState([]);
  const [docInfo, setDocInfo] = useState([]);
  const [ userDetails, setUserDetails ] = useState([]) ;
  const navigate = useNavigate();

  // Barrer Token useEffect --------------------
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
    // else {
    //   const user = JSON.parse(localStorage.getItem("user"));
    //   const headers = {
    //     accept: "application/json",
    //     Authorization: "Bearer " + user.token,
    //   }}
  }, [navigate]);

  const handleAddEduInfo = () => {
    setEduInfo([
      ...eduInfo,
      {
        degreeName: "",
        institutionName: "",
        certificates: null,
        markSheet: null,
      },
    ]);
  };
  const handleAddDocInfo = () => {
    setDocInfo([
      ...docInfo,
      {
        documentName: "",
        file: null,
      },
    ]);
  };


  // handle Submit  method -----------------
const handleSubmit = () => {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const headers = {
    accept: "application/json",
    Authorization: "Bearer " + user.token,
  };

  const data = new FormData();

  // Append educational info----------------------
  eduInfo.forEach((edu) => {
    data.append("degreeName", edu.degreeName);
    data.append("institutionName", edu.institutionName);
    if (edu.certificates) {
      data.append("certificates", edu.certificates);
    }
    if (edu.markSheet) {
      data.append("markSheet", edu.markSheet);
    }
  })
  // Append document info
  docInfo.forEach((doc) => {
    data.append("documentName", doc.documentName);
    if (doc.file) {
      data.append("file", doc.file);
    }
  })

  axios
    .post("https://backend.ap.loclx.io/api/save-docs", data, {
      headers
    })
    .then((res) => {
      if (res.status === 201) { 
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(res.data.message);
        setUserDetails(res.data); 
      } else if (res.status === 403) { 
        Swal.fire({
          icon: "error",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(res.data.message);
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 2500,
      });
    });
  console.log("userDetails",userDetails);
  console.log("eduInfo:",eduInfo)
    console.log("docInfo:",docInfo)
};

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
        <h1 className="text-3xl">Educational Information</h1>

        {/*---------------------- Add Educational button -------------- */}

        <button
        onClick={handleAddEduInfo}
        className="btn btn-sm btn-success text-white">
          Add Educational
        </button>
        {eduInfo && eduInfo.map((edu, index) => (
        <div key={index} className="mb-[100px]">
          {/* Degree Name */}
          <div className="user_Details_paragraph">
            <label>Degree_Name:</label>
            <input
              type="text"
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              value={edu.degreeName}
              onChange={(e) => {
                const updatedInfo = [...eduInfo];
                updatedInfo[index].degreeName = e.target.value;
                setEduInfo(updatedInfo);
              }}
            />
          </div>
          {/* Institution Name */}
          <div className="user_Details_paragraph">
            <label>Institution_Name:</label>
            <input
              type="text"
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              value={edu.institutionName}
                  onChange={(e) => {
                    const updatedInfo = [...eduInfo];
                    updatedInfo[index].institutionName = e.target.value;
                    setEduInfo(updatedInfo);
                  }}
            />
          </div>
          <section className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1">
            {/* Certificates */}
            <div className="user_Details_paragraph">
              <label>Certificates:</label>
              <input
                type="file"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
                onChange={(e) => {
                  const updatedInfo = [...eduInfo];
                  updatedInfo[index].certificates = e.target.files[0];
                  setEduInfo(updatedInfo);
                }}
              />
            </div>
            {/* MarkSheet */}
            <div className="user_Details_paragraph">
              <label>MarkSheet:</label>
              <input
                type="file"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
                onChange={(e) => {
                  const updatedInfo = [...eduInfo];
                  updatedInfo[index].markSheet = e.target.files[0];
                  setEduInfo(updatedInfo);
                }}
              />
            </div>
          </section>
        </div>
 ))}

        {/*------------------ Other Documents div---------------------- */}
        <h1 className="text-3xl mt-[100px]">Other Documents</h1>
        <div>
          {/*------------------------ Add Documents button -------------- */}
          <button onClick={handleAddDocInfo}
           className="btn btn-sm btn-info text-white ">Add Documents</button>

{docInfo && docInfo.map((doc, index) => (
          <div key={index} className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {/* Document Name */}
            <div className="user_Details_paragraph">
              <label>Document_Name:</label>
              <input
                type="text"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
                value={doc.documentName}
                onChange={(e) => {
                  const updatedInfo = [...docInfo];
                  updatedInfo[index].documentName = e.target.value;
                  setDocInfo(updatedInfo);
                }}
              />
            </div>
            {/* Document File */}
            <div className="user_Details_paragraph">
              <label>File:</label>
              <input
                type="file"
                className="user_Details_span file-input file-input-sm w-full max-w-x"
                onChange={(e) => {
                  const updatedInfo = [...docInfo];
                  updatedInfo[index].file = e.target.files[0];
                  setDocInfo(updatedInfo);
                }}
              />
            </div>
          </div>
))}
{/* submit Button  */}
<span className="flex justify-center mt-[50px]">
  <button 
  onClick={handleSubmit}
  className="btn bg-[#25476a] text-white hover:text-black">Submit</button>
  </span>

        </div>
      </div>
    </div>
  );
};

export default UserDetailsInfo;
