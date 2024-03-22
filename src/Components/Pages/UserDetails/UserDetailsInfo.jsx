import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFiletypePdf } from "react-icons/bs";

const UserDetailsInfo = () => {
  const navigate = useNavigate();
  const [eduInfos, setEduInfos] = useState([]);
  const [docInfos, setDocInfos] = useState([]);
  const [institutionName, setInstitutionName] = useState("");
  const [certificates, setCertificates] = useState(null);
  const [markSheet, setMarkSheet] = useState(null);
  const [documentName, setDocumentName] = useState("");
  const [docFile, setDocFile] = useState("");
  const [eduLoading, setEduLoading] = useState(true);
  const [docLoading, setDocLoading] = useState(true);

  // handleChange section -------------------
  const degreeNameChange = (e) => {
    setDocumentName(e.target.value);
  };
  const institutionNameChange = (e) => {
    setInstitutionName(e.target.value);
  };
  const certificatesChange = (e) => {
    // console.log("Certificates:", e.target.files[0]);
    setCertificates(e.target.files[0]);
  };
  const markSheetChange = (e) => {
    // console.log("MarkSheet:", e.target.files[0]);
    setMarkSheet(e.target.files[0]);
  };
  const documentNameChange = (e) => {
    setDocumentName(e.target.value);
  };
  const docFileChange = (e) => {
    setDocFile(e.target.files[0]);
  };

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
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    
    // Educational Information table  get method------------------------
    setEduLoading(true);
    axios
    .get("https://backend.ap.loclx.io/api/edu-info", {
      headers,
    })
    .then((res) => {
        setEduInfos(res.data.data);
        setEduLoading(false);
      });
    // console.log(eduInfos);
    // Other Documents table get method------------------------
    setDocLoading(true);
    axios
      .get("https://backend.ap.loclx.io/api/doc-info", {
        headers,
      })
      .then((res) => {
        setDocInfos(res.data.data);
        setDocLoading(false);
      });
  }, [navigate]);
    // markLink section -----------------
    const handleMarkLinkDownload = (markLink) => {
      window.open(markLink, "_blank");
    };
    // crtLink section -----------------
    const handleCrtLinkDownload = (crtLink) => {
      window.open(crtLink, "_blank");
    };
    // handleAddEduInfo button -----------------------
  const handleAddEduInfo = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    // console.log("documentName:", documentName);
    // console.log("institutionName:", institutionName);
    // console.log("certificates:", certificates);
    // console.log("markSheet:", markSheet);

    const data = new FormData();
    data.append("documentName", documentName);
    data.append("institutionName", institutionName);
    data.append("certificates", certificates);
    data.append("markSheet", markSheet);

    axios
      .post("https://backend.ap.loclx.io/api/save-docs", data, { headers })
      .then((res) => {
        if (res.data.status === "201") {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
          // setUserDetails({ eduInfo, docInfo, ...res.data })
        } else if (res.data.status === "403") {
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
  };

  const handleAddDocInfo = () => {
    // console.log("documentName:", documentName);
    // console.log("docFile:", docFile);
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    // console.log("documentName:", documentName);
    // console.log("docFile:", docFile);

    const data = new FormData();
    data.append("documentName", documentName);
    data.append("docFile", docFile);

    axios
      .post("https://backend.ap.loclx.io/api/save-docs", data, { headers })
      .then((res) => {
        if (res.data.status === "201") {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
          // setUserDetails({ eduInfo, docInfo, ...res.data })
        } else if (res.data.status === "403") {
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
  };

  return (
    <div className="container mx-auto">

<Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

      {/* form div  */}
      <div className=" my-[50px] leading-[50px] font-semibold ">
        {/*------------------ Educational Information div---------------------- */}
        <div>
          <h1 className="text-3xl">Educational Information</h1>
          {/* Degree Name */}
          <div className="user_Details_paragraph">
            <label>Degree_Name:</label>
            <input
              type="text"
              name="documentName"
              required
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
              required
              className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              onChange={institutionNameChange}
            />
          </div>
          <section className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1">
            {/* Certificates */}
            <div className="user_Details_paragraph">
              <label htmlFor="file">Certificates:</label>
              <input
                type="file"
                name="file"
                id="file"
                required
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
                onChange={certificatesChange}
              />
            </div>
            {/* MarkSheet */}
            <div className="user_Details_paragraph">
              <label htmlFor="file">MarkSheet:</label>
              <input
                type="file"
                name="file"
                id="file"
                required
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
        {/* Educational Information table */}
        <div className="overflow-x-auto mt-[50px] mb-[150px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>index</th>
                <th>Document Name</th>
                <th>Institute Name</th>
                <th>Certificate</th>
                <th>MarkSheet</th>
                <th>Action</th>
              </tr>
            </thead>
            {
            eduLoading ? 
            ( <p className="mt-[30px] text-center"><span className="w-[50px] loading loading-spinner text-neutral"></span></p>) :(
            <tbody>
              {eduInfos && eduInfos.map((eduInfo, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{eduInfo.documentName}</td>
                    <td>{eduInfo.institutionName}</td>
                    <td onClick={() => handleCrtLinkDownload(eduInfo.crtLink)}>
                    <BsFiletypePdf
                      className="p-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white"
                      size={40}
                      />
                      </td>
                    <td onClick={() => handleMarkLinkDownload(eduInfo.markLink)}>
                      <BsFiletypePdf
                      className="p-1 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                      size={40}
                      />
                    </td>
                    <button className="btn btn-xs mt-[20px] btn-error">Delete</button>
                  </tr>
                ))}
            </tbody>
            ) 
            }
          </table>
        </div>
        {/*------------------ Other Documents div---------------------- */}
        <div>
          <h1 className="text-3xl mt-[100px]">Other Documents</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {/* Document Name */}
            <div className="user_Details_paragraph">
              <label>Document_Name:</label>
              <input
                type="text"
                name="documentName"
                required
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent px-3 py-1 border-b-2 border-gray-600"
                onChange={documentNameChange}
              />
            </div>
            {/* Document File */}
            <div className="user_Details_paragraph">
              <label htmlFor="file">File:</label>
              <input
                type="file"
                name="file"
                required
                id="file"
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
        {/* Other Documents table */}
        <div className="overflow-x-auto mt-[50px] mb-[150px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>index</th>
                <th>Document Name</th>
                <th>Institute Name</th>
                <th>Certificate</th>
                <th>MarkSheet</th>
                <th>Action</th>
              </tr>
            </thead>
            {
            docLoading ? 
            ( <p className="mt-[30px] text-center"><span className="w-[50px] loading loading-spinner text-neutral"></span></p>) :(
            <tbody>
              {docInfos && docInfos.map((docInfo, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{docInfo.documentName}</td>
                    <td>{docInfo.institutionName}</td>
                    <td onClick={() => handleCrtLinkDownload(docInfo.crtLink)}>
                    <BsFiletypePdf
                      className="p-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white"
                      size={40}
                      />
                      </td>
                    <td onClick={() => handleMarkLinkDownload(docInfo.markLink)}>
                      <BsFiletypePdf
                      className="p-1 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                      size={40}
                      />
                    </td>
                    <button className="btn btn-xs mt-[20px] btn-error">Delete</button>
                  </tr>
                ))}
            </tbody>
            ) 
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsInfo;
