import { useEffect, useState } from "react";
import AdminNav from "../../../../AdminPanel/AdminNav";
import SearchPanel from "../../../SearchPanel/SearchPanel";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFiletypePdf } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

const AdminLeedsDetails = () => {
  const navigate = useNavigate();
  const [eduInfos, setEduInfos] = useState([]);
  const [docInfos, setDocInfos] = useState([]);
  const [contractInfos, setContracts] = useState([]);
  const [eduLoading, setEduLoading] = useState(true);
  const [docLoading, setDocLoading] = useState(true);
  const [contractLoading, setContractLoading] = useState(true);

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
      .get("https://backend.ap.loclx.io/api/edu-info", {
        headers,
      })
      .then((res) => {
        setEduInfos(res.data.data);
        setEduLoading(false);
      });
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
    //Contract table get method------------------------
    setContractLoading(true);
    axios
      .get("https://backend.ap.loclx.io/api/~~~~~~~~", {
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


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <AdminNav />

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <SearchPanel />

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div>
            <h1
              style={{ fontFamily: "Taviraj, serif" }}
              className="text-center font-semibold text-3xl mt-[50px] mb-[10px]"
            >
              Leeds Details
            </h1>
            <hr className="border border-gray-300" />
            {/* ------------------------image and info ------------------- */}
            <section className="mx-[10px] mt-[10px] grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1">
              {/* image  */}
              <div className="flex justify-center">
                <img
                  src="https://i2.wp.com/mrkoachman.com/wp-content/uploads/2015/10/mrkoachman_blog-9.jpg"
                  className="w-[250px] h-[250px] rounded-full"
                  alt=""
                />
              </div>
              {/* information */}
              <div className=" mt-[10px] text-2xl">
                <p className=" font-medium mb-[10px]">
                  Name: <span className="font-medium text-gray-600"></span>
                </p>
                <p className=" font-medium mb-[10px]">
                  Father Name:{" "}
                  <span className="font-medium text-gray-600"></span>
                </p>
                <p className=" font-medium mb-[10px]">
                  Mother Name:{" "}
                  <span className="font-medium text-gray-600"></span>
                </p>
                <p className=" font-medium mb-[10px]">
                  Birth Date:{" "}
                  <span className="font-medium text-gray-600"></span>
                </p>
                <p className=" font-medium">
                  Email: <span className="font-medium text-gray-600"></span>
                </p>
              </div>
            </section>
            {/*------------------ Tabel Section---------------------- */}
            <section className="mx-[10px]">
              {/*Educational Information Table Section */}
              <h1 className="text-3xl font-semibold mt-[40px]">Educational Information</h1>
              <div className="overflow-x-auto mt-[20px] mb-[150px]">
                <table className="table">
                  {/* head */}
                  <thead className="bg-gray-300">
                    <tr>
                      <th>index</th>
                      <th>Document Name</th>
                      <th>Institute Name</th>
                      <th>Certificate</th>
                      <th>MarkSheet</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {eduLoading ? (
                    <p className="mt-[30px] text-center">
                      <span className="w-[50px] loading loading-spinner text-neutral"></span>
                    </p>
                  ) : (
                    <tbody>
                      {eduInfos &&
                        eduInfos.map((eduInfo, index) => (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{eduInfo.documentName}</td>
                            <td>{eduInfo.institutionName}</td>
                            <td
                              onClick={() =>
                                handleCrtLinkDownload(eduInfo.crtLink)
                              }
                            >
                              <BsFiletypePdf
                                className="p-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white"
                                size={40}
                              />
                            </td>
                            <td
                              onClick={() =>
                                handleMarkLinkDownload(eduInfo.markLink)
                              }
                            >
                              <BsFiletypePdf
                                className="p-1 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                                size={40}
                              />
                            </td>
                            <button className="btn btn-xs mt-[20px] btn-error">
                              Delete
                            </button>
                          </tr>
                        ))}
                    </tbody>
                  )}
                </table>
              </div>
              {/*Other Documents Table Section */}
              <h1 className="text-3xl font-semibold">Other Documents</h1>
              <div className="overflow-x-auto mt-[20px] mb-[150px]">
                <table className="table">
                  {/* head */}
                  <thead className="bg-gray-300">
                    <tr>
                      <th>index</th>
                      <th>Document Name</th>
                      <th>Documents</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {docLoading ? (
                    <p className="mt-[30px] text-center">
                      <span className="w-[50px] loading loading-spinner text-neutral"></span>
                    </p>
                  ) : (
                    <tbody>
                      {docInfos &&
                        docInfos.map((docInfo, index) => (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{docInfo.documentName}</td>
                            <td
                              onClick={() =>
                                handleDocumentsLinkDownload(docInfo.docFile)
                              }
                            >
                              <BsFiletypePdf
                                className="p-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white"
                                size={40}
                              />
                            </td>
                            <button className="btn btn-xs mt-[20px] btn-error">
                              Delete
                            </button>
                          </tr>
                        ))}
                    </tbody>
                  )}
                </table>
              </div>

              {/*Contracts  Table Section */}
              <h1 className="text-3xl font-semibold">Contracts Information</h1>
              <div className="overflow-x-auto mt-[20px] mb-[150px]">
                <table className="table">
                  {/* head */}
                  <thead className="bg-gray-300">
                    <tr>
                      <th>index</th>
                      <th>Contract Code</th>
                      <th>Payment Slip</th>
                      <th>Contract Paper</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {contractLoading ? (
                    <p className="mt-[30px] text-center">
                      <span className="w-[50px] loading loading-spinner text-neutral"></span>
                    </p>
                  ) : (
                    <tbody>
                      {contractInfos &&
                        contractInfos.map((contractInfo, index) => (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{contractInfo.contractCode}</td>
                            <td
                              onClick={() =>
                                handlePaymentSlipLinkDownload(
                                  contractInfo.paymentSlip
                                )
                              }
                            >
                              <BsFiletypePdf
                                className="p-1 rounded-lg text-green-500 hover:bg-green-500 hover:text-white"
                                size={40}
                              />
                            </td>
                            <td
                              onClick={() =>
                                handleContractPaperLinkDownload(
                                  contractInfo.contractPaper
                                )
                              }
                            >
                              <BsFiletypePdf
                                className="p-1 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
                                size={40}
                              />
                            </td>
                            <button className="btn btn-xs mt-[20px] btn-error">
                              Delete
                            </button>
                          </tr>
                        ))}
                    </tbody>
                  )}
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLeedsDetails;
