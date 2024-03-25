/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./ContractPage.css";
import { useState } from "react";

const ContractPage = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    input12: "",
    input13: "",
  });

  // handleInputChange------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission and saving to localStorage
  const handleSubmit = () => {
    // Save form data to localStorage
    localStorage.setItem("contractFormData", JSON.stringify(formData));
  };

  return (
    <div className="parentDiv">
      {/* info div  */}
      <div className="info">
        <h1 className="infoH1">
          Consulting <br /> Agreement
        </h1>
        <section className="section">
          {/* -------------------------------------- */}
          <p className="sectionTitle">Parties</p>
          <p className="sectionInfo">
            - This Servicde Contract Agreement (here in after Referred to as the{" "}
            <span className="font-bold">"Agreement"</span> ) is entered into on{" "}
            <input
              name="input1"
              onChange={handleInputChange}
              className="sectionInput"
              type="text"
            />{" "}
            ( the <span className="font-bold">"Effective Date"</span>).by and
            Between{" "}
            <input
              name="input2"
              onChange={handleInputChange}
              className="sectionInput"
              type="text"
            />{" "}
            with an address of{" "}
            <input
              name="input3"
              onChange={handleInputChange}
              className="sectionInput"
              type="text"
            />{" "}
            (here in after referred to as the{" "}
            <span className="font-bold">"Client"</span> )(colletively referred
            as the <span className="font-bold">"parties"</span>)
          </p>
          {/* -------------------------------------- */}
          <p className="sectionTitle">Consideration</p>
          <p className="sectionInfo">
            - The Parties agree that the Consultant provide the service attached
            here under. whereas the Client will in return provide compensation
            for such service and expertise.
          </p>
          {/* -------------------------------------- */}
          <p className="sectionTitle">Service</p>
          <p className="sectionInfo leading-10">
            - The Consultant's service summarized down below: <br />
            <span className="flex">
              1.
              <input
                name="input4"
                onChange={handleInputChange}
                className="sectionInput w-[80%]"
                type="text"
              />
            </span>
            <span className="flex">
              2.
              <input
                name="input5"
                onChange={handleInputChange}
                className="sectionInput w-[80%]"
                type="text"
              />
            </span>
            <span className="flex">
              3.
              <input
                name="input6"
                onChange={handleInputChange}
                className="sectionInput w-[80%]"
                type="text"
              />
            </span>
            <span className="flex">
              4.
              <input
                name="input7"
                onChange={handleInputChange}
                className="sectionInput w-[80%]"
                type="text"
              />
            </span>
            <span className="flex">
              5.
              <input
                name="input8"
                onChange={handleInputChange}
                className="sectionInput w-[80%]"
                type="text"
              />
            </span>
            <span className="flex">
              6.
              <input
                name="input9"
                onChange={handleInputChange}
                className="sectionInput w-[80%]"
                type="text"
              />
            </span>
          </p>
          {/* -------------------------------------- */}
          <p className="sectionTitle">Consideration</p>
          <p className="sectionInfo">
            - A fee of{" "}
            <input
              name="input10"
              onChange={handleInputChange}
              className="sectionInput"
              type="text"
            />{" "}
            will be invoice to CLient by the Consultant on the first day of
            every month for all the services provided and performed as will as
            for all the pre-approved expenses incurred the previous month.{" "}
            <br />- The Client is required to pay the invoice within{" "}
            <input
              name="input11"
              onChange={handleInputChange}
              className="sectionInput"
              type="text"
            />{" "}
            days upon receiving it. <br />- The Parties agree that the payments
            are to be made via{" "}
            <input
              name="input12"
              onChange={handleInputChange}
              className="sectionInput"
              type="text"
            />{" "}
            and sent to the following address <br />
            <input
              name="input13"
              onChange={handleInputChange}
              className="sectionInput w-full"
              type="text"
            />
          </p>
        </section>
      </div>
      {/* submit button ------------------------------ */}
      <div className="flex justify-center mb-[50px]">
        <Link to="/confirmContractPage">

          <button
            onClick={handleSubmit}
            className="submit"
          >
            Submit
          </button>
        </Link>
      </div>
      {/* submit button ------------------------------ */}
    </div>
  );
};

export default ContractPage;
