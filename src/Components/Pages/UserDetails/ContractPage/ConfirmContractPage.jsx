/* eslint-disable react/no-unescaped-entities */
import "./ContractPage.css";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

const ConfirmContractPage = () => {

  const ref = useRef();
  const contractFormData = JSON.parse(localStorage.getItem("contractFormData"));

  return (
      <div>
    <div  ref={ref} className="parentDiv">
        <div className="info">
          <h1 className="infoH1">
            Consulting <br /> Agreement
          </h1>
          <section className="section">
            {/* -------------------------------------- */}
            <p className="sectionTitle">Parties</p>
            <p className="sectionInfo">
              - This Servicde Contract Agreement (here in after Referred to as
              the <span className="font-bold">"Agreement"</span> ) is entered
              into on {contractFormData?.input1} ( the{" "}
              <span className="font-bold">"Effective Date"</span>).by and
              Between {contractFormData?.input2} with an address of{" "}
              {contractFormData?.input3} (here in after referred to as the{" "}
              <span className="font-bold">"Client"</span> )(colletively referred
              as the <span className="font-bold">"parties"</span>)
            </p>
            {/* -------------------------------------- */}
            <p className="sectionTitle">Consideration</p>
            <p className="sectionInfo">
              - The Parties agree that the Consultant provide the service
              attached here under. whereas the Client will in return provide
              compensation for such service and expertise.
            </p>
            {/* -------------------------------------- */}
            <p className="sectionTitle">Service</p>
            <p className="sectionInfo leading-10">
              - The Consultant's service summarized down below: <br />
              <span className="flex">
                1.
                {contractFormData?.input4}
              </span>
              <span className="flex">
                2.
                {contractFormData?.input5}
              </span>
              <span className="flex">
                3.
                {contractFormData?.input6}
              </span>
              <span className="flex">
                4.
                {contractFormData?.input7}
              </span>
              <span className="flex">
                5.
                {contractFormData?.input8}
              </span>
              <span className="flex">
                6.
                {contractFormData?.input9}
              </span>
            </p>
            {/* -------------------------------------- */}
            <p className="sectionTitle">Consideration</p>
            <p className="sectionInfo">
              - A fee of {contractFormData?.input10} will be invoice to CLient
              by the Consultant on the first day of every month for all the
              services provided and performed as will as for all the
              pre-approved expenses incurred the previous month. <br />- The
              Client is required to pay the invoice within{" "}
              {contractFormData?.input11} days upon receiving it. <br />- The
              Parties agree that the payments are to be made via{" "}
              {contractFormData?.input12} and sent to the following address{" "}
              <br />
              {contractFormData?.input13}
            </p>
          </section>
        </div>
    </div>
      {/* submit button ------------------------------ */}
      <div className="flex justify-center mb-[50px]">
      <ReactToPrint
          trigger={() => (
          <button
            className="submit"
          >
            Print
          </button>
          )}
          content={() => ref.current}
        ></ReactToPrint>
      </div>
      {/* submit button ------------------------------ */}
    </div>
  );
};

export default ConfirmContractPage;
