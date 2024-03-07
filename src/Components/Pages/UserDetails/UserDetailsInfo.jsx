import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetailsInfo = () => {
  const navigate = useNavigate();
  const [eduInfo, setEduInfo] = useState([]);
  const [docInfo, setDocInfo] = useState([]);
    const [eduDocumentType, setEduDocumentType] = useState("eduInfo");
    const [degreeName, setDegreeName] = useState("");
    const [institutionName, setInstitutionName] = useState("");
    const [certificates, setCertificates] = useState([]);
    const [markSheet, setMarkSheet] = useState([]);
    const [docDocumentType, setDocDocumentType] = useState("docinfo");
    const [documentName, setDocumentName] = useState("");
    const [docFile, setDocFile] = useState([]);

    // handleChange section -------------------
   const eduDocumentTypeChange =(e) =>{
    setEduDocumentType(e.target.value)
   }
   const degreeNameChange =(e) =>{
    setDegreeName(e.target.value)
   }
   const institutionNameChange =(e) =>{
    setInstitutionName(e.target.value)
   }
   const certificatesChange =(e) =>{
    setCertificates(e.target.value)
   }
   const markSheetChange =(e) =>{
    setMarkSheet(e.target.value)
   }
   const docDocumentTypeChange =(e) =>{
    setDocDocumentType(e.target.value)
   }
   const documentNameChange =(e) =>{
    setDocumentName(e.target.value)
   }
   const docFileChange =(e) =>{
    setDocFile(e.target.value)
   }

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
    console.log( "eduDocumentType:", eduDocumentType);
    console.log( "degreeName:",degreeName );
    console.log( "institutionName:",institutionName );
    console.log( "certificates:",certificates );
    console.log( "markSheet:", markSheet);
  };

  const handleAddDocInfo = () => {
console.log( "docDocumentType:",docDocumentType );
console.log( "documentName:",documentName );
console.log( "docFile:",docFile );
  };

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
        <div>
          <h1 className="text-3xl">Educational Information</h1>
          {/* Document Type */}
          <div className="user_Details_paragraph">
            <label>Document_Type:</label>
            <input
              type="text"
              name="eduDocumentType"
              value="eduInfo"
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
              onChange={eduDocumentTypeChange}
              readOnly
            />
          </div>
          {/* Degree Name */}
          <div className="user_Details_paragraph">
            <label>Degree_Name:</label>
            <input
              type="text"
              name="degreeName"
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              onChange={degreeNameChange}
            />
          </div>
          {/* Institution Name */}
          <div className="user_Details_paragraph">
            <label>Institution_Name:</label>
            <input
              type="text"
              name="institutionName"
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              onChange={institutionNameChange}
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
                onChange={certificatesChange}
              />
            </div>
            {/* MarkSheet */}
            <div className="user_Details_paragraph">
              <label>MarkSheet:</label>
              <input
                type="file"
                name="markSheet"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
                onChange={markSheetChange}
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
        <div>
          <h1 className="text-3xl mt-[100px]">Other Documents</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {/* Document Type */}
            <div className="user_Details_paragraph">
              <label>Document_Type:</label>
              <input
                type="text"
                name="docDocumentType"
                value="docInfo"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
                onChange={docDocumentTypeChange}
                readOnly
              />
            </div>
            {/* Document Name */}
            <div className="user_Details_paragraph">
              <label>Document_Name:</label>
              <input
                type="text"
                name="documentName"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
                onChange={documentNameChange}
              />
            </div>
            {/* Document File */}
            <div className="user_Details_paragraph">
              <label>File:</label>
              <input
                type="file"
                name="docFile"
                className="user_Details_span file-input file-input-sm w-full max-w-x"
                onChange={docFileChange}
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
