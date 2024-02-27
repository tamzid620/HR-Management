import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetailsInfo = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [formData, setFormData] = useState({
    eduInfo: [{ degreeName: "", institutionName: "", certificates: null, markSheet: null }],
    otherDocs: [{ documentsName: "", file: null }],
  });
  const navigate = useNavigate();

  const handleEducationalInfoChange = (index, key, event) => {
    const newEducationalInfo = [...formData.eduInfo];
    newEducationalInfo[index][key] = event.target.value;
    setFormData({ ...formData, eduInfo: newEducationalInfo });
  };

  const handleEducationalInfoFileChange = (index, key, event) => {
    const newEducationalInfo = [...formData.eduInfo];
    newEducationalInfo[index][key] = event.target.files[0];
    setFormData({ ...formData, eduInfo: newEducationalInfo });
  };

  const addEducationalInfo = () => {
    setFormData({
      ...formData,
      eduInfo: [...formData.eduInfo, { degreeName: "", institutionName: "", certificates: null, markSheet: null }],
    });
  };

  // Function to handle changes in document name
  const handleDocumentNameChange = (index, event) => {
    const newDocuments = [...formData.otherDocs];
    newDocuments[index].documentsName = event.target.value;
    setFormData({ ...formData, otherDocs: newDocuments });
  };

  // Function to handle file input changes
  const handleFileInputChange = (index, event) => {
    const newDocuments = [...formData.otherDocs];
    newDocuments[index].file = event.target.files[0];
    setFormData({ ...formData, otherDocs: newDocuments });
  };

  // Function to add a new document input
  const addDocument = () => {
    setFormData({ ...formData, otherDocs: [...formData.otherDocs, { documentsName: "", file: null }] });
  };

  return (
    <div className="container mx-auto">
      {/* user informaiton div */}
      <div className=" leading-[50px] font-semibold ">
        {/* User information fields */}
      </div>

      {/* Educational Information div */}
      <div className="my-[50px]  leading-[50px] font-semibold ">
        {/* Add Educational button */}
        <button onClick={addEducationalInfo} className="btn btn-sm btn-success text-white ">
          Add Educational
        </button>
        {/* Educational information fields */}
      </div>

      {/* Other Documents div */}
      <div>
        {/* Add Documents button */}
        <button onClick={addDocument} className="btn btn-sm btn-info text-white ">
          Add Documents
        </button>
        {/* Other documents fields */}
      </div>
    </div>
  );
};

export default UserDetailsInfo;
