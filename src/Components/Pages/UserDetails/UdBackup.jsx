import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UdBackup = () => {
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
  

  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    const formData = {
      eduInfo: eduInfo.map(edu => ({
        degreeName: edu.degreeName ? edu.degreeName : null,
        institutionName: edu.institutionName ? edu.institutionName : null,
        certificates: edu.certificates,
        markSheet: edu.markSheet
      })),
      docInfo: docInfo.map(doc => ({
        documentName: doc.documentName ? doc.documentName : null,
        file: doc.file
      }))
    };
    const data = new FormData();
    data.append("formData", JSON.stringify(formData));
    console.log("formData:" , formData);
    console.log("eduInfo:" , formData.eduInfo);
    console.log("docInfo:" , formData.docInfo);

    
    axios .post("https://backend.ap.loclx.io/api/save-docs", data, {headers,})
      .then((res) => {
        if (res.data.status === '201') {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
          // setUserDetails({ eduInfo, docInfo, ...res.data })
          
        } else if (res.data.status === '403') {
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
          icon: "error",
          title: "Error",
          text: error.response.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
      });

// console.log() section ---------------------
  // eduInfo.forEach((edu) => {
  //   if (edu.degreeName) {console.log("degreeName:", JSON.stringify(edu?.degreeName))}
  //   if (edu.institutionName) {console.log("institutionName:", JSON.stringify(edu?.institutionName))}
  //   if (edu.certificates) {console.log("certificates:", edu?.certificates)}
  //   if (edu.markSheet) {console.log("markSheet:", edu?.markSheet)}
  // })
  // docInfo.forEach((doc) => {
  //   if (doc.documentName) {console.log("documentName:", JSON.stringify(doc?.documentName))}
  //   if (doc.file) {console.log("file:", doc?.file)}
  // })
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
              name= "degreeName"
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
              name="institutionName"
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
                name="certificates"
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
                name="markSheet"
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
                name="documentName" 
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
                name="file"
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

export default UdBackup;
