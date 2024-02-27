import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetailsInfo = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [eduInfo, setEduInfo] = useState([{ degreeName: "", institutionName: "", certificates: null, markSheet: null }]);
  const [otherDocs, setOtherDocs] = useState([{documentsName:"", file:null}]);
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
    }
  }, [navigate]);

  const handleEducationalInfoChange = (index, key, event) => {
    const newEducationalInfo = [...eduInfo];
    newEducationalInfo[index][key] = event.target.value;
    setEduInfo(newEducationalInfo);
  };
  
  const handleEducationalInfoFileChange = (index, key, event) => {
    const newEducationalInfo = [...eduInfo];
    newEducationalInfo[index][key] = event.target.files[0];
    setEduInfo(newEducationalInfo);
  };
  
  const addEducationalInfo = () => {
    setEduInfo([...eduInfo, { degreeName: "", institutionName: "", certificates: null, markSheet: null }]);
  };
  

  // Function to handle changes in document name
  const handleDocumentNameChange = (index, event) => {
    const newDocuments = [...otherDocs];
    newDocuments[index].name = event.target.value;
    setOtherDocs(newDocuments);
  };

  // Function to handle file input changes
  const handleFileInputChange = (index, event) => {
    const newDocuments = [...otherDocs];
    newDocuments[index].file = event.target.files[0];
    setOtherDocs(newDocuments);
  };

  // Function to add a new document input
  const addDocument = () => {
    setOtherDocs([...otherDocs, { name: "", file: null }]);
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
        <h1 className="text-3xl mb-[20px]">Educational Information</h1>
        {/* Add Educational button -------------- */}
        <button  onClick={addEducationalInfo} className="btn btn-sm btn-success text-white ">
          Add Educational
        </button>
      <div>

        {eduInfo.map((info, index) => (
  <div key={index}>
    {/* Degree Name */}
    <div className="user_Details_paragraph">
      <label>Degree_Name:</label>
      <input
        type="text"
        value={info.degreeName}
        onChange={(event) => handleEducationalInfoChange(index, 'degreeName', event)}
        className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
      />
    </div>
    {/* Institution Name */}
    <div className="user_Details_paragraph">
      <label>Institution_Name:</label>
      <input
        type="text"
        value={info.institutionName}
        onChange={(event) => handleEducationalInfoChange(index, 'institutionName', event)}
        className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
      />
    </div>
    {/* Certificates */}
    <div className="user_Details_paragraph">
      <label>Certificates:</label>
      <input
        type="file"
        onChange={(event) => handleEducationalInfoFileChange(index, 'certificates', event)}
        className="user_Details_span file-input  file-input-sm w-full max-w-x"
      />
    </div>
    {/* MarkSheet */}
    <div className="user_Details_paragraph">
      <label>MarkSheet:</label>
      <input
        type="file"
        onChange={(event) => handleEducationalInfoFileChange(index, 'markSheet', event)}
        className="user_Details_span file-input  file-input-sm w-full max-w-x"
      />
    </div>
  </div>
))}

      </div>
{/* Other DOcuments div */}
        <h1 className="text-3xl my-[20px]">Other Documents</h1>
        <div>
        {/* Add Documents button -------------- */}
        <button  onClick={addDocument} className="btn btn-sm btn-info text-white ">
          Add Documents
        </button>

        {otherDocs.map((otherDoc, index) => (
            <div key={index} className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1">
              <div className="user_Details_paragraph">
                <label>Documents_Name:</label>
                <input
                  type="text"
                  name="documentsName"
                  onChange={(event) => handleDocumentNameChange(index, event)}
                  className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
                />
              </div>
              <div className="user_Details_paragraph">
                <label>File:</label>
                <input
                  type="file"
                  name= "file"
                  onChange={(event) => handleFileInputChange(index, event)}
                  className="user_Details_span file-input  file-input-sm w-full max-w-x"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsInfo;
