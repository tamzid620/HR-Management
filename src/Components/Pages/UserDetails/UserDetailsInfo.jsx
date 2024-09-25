import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFiletypePdf } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

const UserDetailsInfo = () => {
  
  const navigate = useNavigate();
  const [eduInfos, setEduInfos] = useState([]);
  const [docInfos, setDocInfos] = useState([]);
  const [contractInfos, setContracts] = useState([]);
  const [institutionName, setInstitutionName] = useState("");
  const [certificates, setCertificates] = useState(null);
  const [markSheet, setMarkSheet] = useState(null);
  const [documentName, setDocumentName] = useState("");
  const [docFile, setDocFile] = useState("");
  const [ paymentSlip, setPaymentSlip] = useState("") ;
  const [ contractPaper, setContractPaper] = useState("") ;
  const [eduLoading, setEduLoading] = useState(true);
  const [docLoading, setDocLoading] = useState(true);
  const [contractLoading, setContractLoading] = useState(true);
  const [activeTab , setActiveTab] = useState(0);

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
  const paymentSlipChange = (e) => {
    setPaymentSlip(e.target.files[0]);
    console.log("paymentSlip:", e.target.files[0]);
  };
  const contractPaperChange = (e) => {
    setContractPaper(e.target.files[0]);
    console.log("contractPaper:", e.target.files[0]);
  };

  // Check for token useEffect-----------
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
    .get("https://consultantbackend.softplatoon.com/api/edu-info", {
      headers,
    })
    .then((res) => {
        setEduInfos(res.data.data);
        setEduLoading(false);
      });
    // Other Documents table get method------------------------
    setDocLoading(true);
    axios
      .get("https://consultantbackend.softplatoon.com/api/doc-info", {
        headers,
      })
      .then((res) => {
        setDocInfos(res.data.data);
        setDocLoading(false);
      });
    //Contract table get method------------------------
    setContractLoading(true);
    axios
      .get("https://consultantbackend.softplatoon.com/api/~~~~~~~~", {
        headers,
      })
      .then((res) => {
        setContracts(res.data.data);
        setContractLoading(false);
      });
  }, [navigate]);

//------------------- download handler section -----------------
    const handleMarkLinkDownload = (markLink) => {
      window.open(markLink, "_blank");
    };
    const handleCrtLinkDownload = (crtLink) => {
      window.open(crtLink, "_blank");
    };
    const handleDocumentsLinkDownload = (docFile) => {
      window.open(docFile, "_blank");
    };
    const handlePaymentSlipLinkDownload = (paymentSlip) => {
      window.open(paymentSlip, "_blank");
    };
    const handleContractPaperLinkDownload = (contractPaper) => {
      window.open(contractPaper, "_blank");
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
      .post("https://consultantbackend.softplatoon.com/api/save-docs", data, { headers })
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
  // handleAddDocInfo button -----------------------
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
      .post("https://consultantbackend.softplatoon.com/api/save-docs", data, { headers })
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
  // handleContract button -----------------------
  const handleContract = () => {
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
    data.append("paymentSlip", paymentSlip);
    data.append("contractPaper", contractPaper);

    axios
      .post("https://consultantbackend.softplatoon.com/api/create-contract", data, { headers })
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
    <div className="container mx-auto mt-[50px]">
<Tabs selectedTab ={activeTab} onSelect={index => setActiveTab(index)} >
        
    <TabList className="flex overflow-x-auto">
          
      <Tab className={`flex items-center gap-2 py-[10px] px-[20px] ${activeTab === 0 ? 'border-b-4 border-b-[#25476a]' :'border-b-transparent'}`}>
        <FaWpforms 
              className="p-1 rounded-lg text-[#25476a] hover:bg-[#25476a] hover:text-white"
              size={40}
                      />
         Educational Information
      </Tab>
      <Tab className={`flex items-center gap-2 py-[10px] px-[20px] ${activeTab === 1 ? 'border-b-4 border-b-[#25476a]' :'border-b-transparent'}`}>
      <FaWpforms 
                      className="p-1 rounded-lg text-[#25476a] hover:bg-[#25476a] hover:text-white"
                      size={40}
                      />
        Other Documents
        </Tab>
      <Tab className={`flex items-center gap-2 py-[10px] px-[20px] ${activeTab === 2 ? 'border-b-4 border-b-[#25476a]' :'border-b-transparent'}`}>
      <FaWpforms 
                      className="p-1 rounded-lg text-[#25476a] hover:bg-[#25476a] hover:text-white"
                      size={40}
                      />
        Contracts
        </Tab>
    </TabList>


      {/*------------------ Educational Information TabPanel---------------------- */}
    <TabPanel className="border-t-2">
      <div className=" my-[50px] leading-[50px] font-semibold ">
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
        {/* Table Section */}
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
    </TabPanel>
      {/*------------------ Other Documents TabPanel---------------------- */}
    <TabPanel className="border-t-2">
      <div className=" my-[50px] leading-[50px] font-semibold ">
          <h1 className="text-3xl">Other Documents</h1>
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
              className="btn btn-success text-white "
            >
              Submit
            </button>
          </div>
        </div>
        {/* Table Section */}
        <div className="overflow-x-auto mt-[50px] mb-[150px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>index</th>
                <th>Document Name</th>
                <th>Documents</th>
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
                    <td onClick={() => handleDocumentsLinkDownload(docInfo.docFile)}>
                    <BsFiletypePdf
                      className="p-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white"
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
    </TabPanel>
      {/*------------------ Contracts TabPanel---------------------- */}
    <TabPanel className="border-t-2">
      <div className=" my-[50px] leading-[50px] font-semibold ">
          <h1 className="text-3xl mb-[20px]">Contracts</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            
            {/* Payment Slip File */}
            <div className="user_Details_paragraph">
              <label htmlFor="file">Payment_Slip:</label>
              <input
                type="file"
                name="file"
                required
                id="file"
                className="user_Details_span file-input file-input-sm w-full max-w-x"
                onChange={paymentSlipChange}
              />
            </div>
            {/* Contract_Paper File */}
            <div className="user_Details_paragraph">
              <label htmlFor="file">Contract_Paper:</label>
              <input
                type="file"
                name="file"
                required
                id="file"
                className="user_Details_span file-input file-input-sm w-full max-w-x"
                onChange={contractPaperChange}
              />
            </div>
          </div>
          {/* handleAddDocInfo section  */}
          <div className="flex justify-center mt-[30px]">
            <button
              onClick={handleContract}
              className="btn btn-success text-white "
            >
              Submit
            </button>
          </div>
        </div>
        {/* Table Section */}
        <div className="overflow-x-auto mt-[50px] mb-[150px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>index</th>
                <th>Contract Code</th>
                <th>Payment Slip</th>
                <th>Contract Paper</th>
                <th>Action</th>
              </tr>
            </thead>
            {
            contractLoading ? 
            ( <p className="mt-[30px] text-center"><span className="w-[50px] loading loading-spinner text-neutral"></span></p>) :(
            <tbody>
              {contractInfos && contractInfos.map((contractInfo, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{contractInfo.contractCode}</td>
                    <td onClick={() => handlePaymentSlipLinkDownload(contractInfo.paymentSlip)}>
                    <BsFiletypePdf
                      className="p-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white"
                      size={40}
                      />
                      </td>
                    <td onClick={() => handleContractPaperLinkDownload(contractInfo.contractPaper)}>
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
    </TabPanel>
  </Tabs>

      {/* form div  */}
      <div>
      
      </div>
    </div>
  );
};

export default UserDetailsInfo;
