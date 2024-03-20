/* eslint-disable react/no-unescaped-entities */
import './ContractPage.css'
import ReactToPrint from "react-to-print";
import { useParams } from "react-router-dom";
import { useRef } from 'react';

const ContractPage = () => {

    const ref = useRef();

    return (
        <div  ref={ref} className="border-gray-500 border-[2px] lg:m-[50px] md:m-[20px]">

        <div className="border-[#25476a] border-[10px] lg:m-[20px] md:m-[20px]">
            <h1 style={{ fontFamily: 'Taviraj, serif' }}
             className=" uppercase text-center text-4xl font-semibold my-[50px]
             ">Consulting <br /> Agreement</h1>
            <section className="section">
                {/* -------------------------------------- */}
                <p className="sectionTitle">Parties</p>
                <p className="sectionInfo"> 
                    - This Servicde Contract Agreement (here in after Referred to as the <span className="font-bold">"Agreement"</span> ) is entered into on <input className='sectionInput' type="text" /> ( the <span className="font-bold">"Effective Date"</span>).by and Between <input className='sectionInput' type="text" /> with an address of <input className='sectionInput' type="text" /> (here in after referred to as the <span className="font-bold">"Client"</span> )(colletively referred as the <span className="font-bold">"parties"</span>)
                </p>
                {/* -------------------------------------- */}
                <p className="sectionTitle">Consideration</p>
                <p className="sectionInfo"> 
                    - The Parties agree that the Consultant provide the service attached here under. whereas the Client will in return provide compensation for such service and expertise.
                </p>
                {/* -------------------------------------- */}
                <p className="sectionTitle">Service</p>
                <p className="sectionInfo leading-10"> 
                    - The Consultant's service summarized down below: <br />
                <span className='flex'>1.<input className='sectionInput w-[80%]' type="text" /></span>
                 <span className='flex'>2.<input className='sectionInput w-[80%]' type="text" /></span>
                 <span className='flex'>3.<input className='sectionInput w-[80%]' type="text" /></span>
                 <span className='flex'>4.<input className='sectionInput w-[80%]' type="text" /></span>
                <span className='flex'>5.<input className='sectionInput w-[80%]' type="text" /></span>
                 <span className='flex'>6.<input className='sectionInput w-[80%]' type="text" /></span>
                </p>
                {/* -------------------------------------- */}
                <p className="sectionTitle">Consideration</p>
                <p className="sectionInfo"> 
                    - A fee of <input className='sectionInput' type="text" /> will be invoice to CLient by the Consultant on the first day of every month for all the services provided and performed as will as for all the pre-approved expenses incurred the previous month. <br />
                    - The Client is required to pay the invoice within <input className='sectionInput' type="text" /> days upon receiving it. <br />
                    - The Parties agree that the payments are to be made via <input className='sectionInput' type="text" /> and sent to the following address <br />
                    <input className='sectionInput w-full' type="text" />
                </p>
            </section>
        </div>
      {/* print button ------------------------------ */}
      <div className="flex justify-center mb-[50px]">
        <ReactToPrint
          trigger={() => (
            <button className="btn bg-[#25476a] text-white border border-black shadow-lg shadow-black hover:text-black hover:border-black ">
              Confirm
            </button>
          )}
          content={() => ref.current}
        ></ReactToPrint>
      </div>
      {/* print button ------------------------------ */}
        </div>
    );
};

export default ContractPage;