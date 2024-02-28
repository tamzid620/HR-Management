
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetailsInfo = () => {
  const [formData, setFormData] = useState([
    {
      eduInfo: {
        degreeName: "",
        institutionName: "",
        certificates: null,
        markSheet: null,
      },
      otherDoc:[],
    },
  ]);

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

  // add Educational Info Field button handler ----------------
  const handleAddEducation = () => {
    setFormData((prevState) => [
      ...prevState,
      {
        eduInfo: {
          degreeName: "",
          institutionName: "",
          certificates: null,
          markSheet: null,
        },
        otherDoc:[] ,
      },
    ]);
  };
  // add Document Field button handler --------------------

  const handleAddDocument = (index) => {
    const updatedInfo = [...formData];
    updatedInfo[index].otherDoc.push({
      documentName: "",
      file: null,
    });
    setFormData(updatedInfo);
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

        {formData.map((edu, index) => (
          <div key={index} className="mb-[100px]">
{/*---------------------- Add Educational button -------------- */}
            <button
              onClick={handleAddEducation}
              className="btn btn-sm mt-[100px] btn-success text-white "
            >
              Add Educational
            </button>
            <div>
              {/* Degree Name */}
              <div className="user_Details_paragraph">
                <label>Degree_Name:</label>
                <input
                  type="text"
                  className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
                  value={edu.degreeName}
                  onChange={(e) => {
                    const updatedInfo = [...formData];
                    updatedInfo[index].eduInfo.degreeName = e.target.value;
                    setFormData(updatedInfo);
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
                    const updatedInfo = [...formData];
                    updatedInfo[index].eduInfo.institutionName = e.target.value;
                    setFormData(updatedInfo);
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
                      const updatedInfo = [...formData];
                      updatedInfo[index].eduInfo.certificates =
                        e.target.files[0];
                      setFormData(updatedInfo);
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
                      const updatedInfo = [...formData];
                      updatedInfo[index].eduInfo.certificates =
                        e.target.files[0];
                      setFormData(updatedInfo);
                    }}
                  />
                </div>
              </section>
            </div>


            {/* Other DOcuments div */}
            <h1 className="text-3xl mt-[100px]">Other Documents</h1>

            <div>
{/*------------------------ Add Documents button -------------- */}
              <button
                onClick={() => handleAddDocument(index)}
                className="btn btn-sm btn-info text-white "
              >
                Add Documents
              </button>
              {edu.otherDoc.map((doc, docIndex) => (
                <div
                  key={docIndex}
                  className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
                >
                  {/* Document Name */}
                  <div className="user_Details_paragraph">
                    <label>Document_Name:</label>
                    <input
                      type="text"
                      className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
                      
                    />
                  </div>
                  {/* Document File */}
                  <div className="user_Details_paragraph">
                    <label>File:</label>
                    <input
                      type="file"
                      className="user_Details_span file-input file-input-sm w-full max-w-x"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetailsInfo;
