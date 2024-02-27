

const UserDetailsInfo = () => {
    return (
        <div className="container mx-auto">
          {/* userd informaiton div */}
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
<button className="btn btn-sm btn-success text-white ">Add Educational</button>


{/* Degree Name ------------------ */}
            <div className="user_Details_paragraph">
            <label>Degree_Name:</label>
              <input
                type="text"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              />
            </div>

{/* Institution Name ------------------ */}
            <div className="user_Details_paragraph">
            <label>Institution_Name:</label>
              <input
                type="text"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              />
            </div>
{/* Certificates and MarkSheet div  */}
<div className="flex items-center">
{/* Certificates ------------------ */}
            <div className="user_Details_paragraph">
            <label>Certificates:</label>
              <input
                type="file"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
              />
            </div>
{/* MarkSheet ------------------ */}
            <div className="user_Details_paragraph">
            <label>MarkSheet:</label>
              <input
                type="file"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
              />
            </div>
</div>
{/* Other DOcuments div */}
<h1 className="text-3xl my-[20px]">Other Documents</h1>

{/* Add Documents button -------------- */}
<button className="btn btn-sm btn-info text-white ">Add Documents</button>

{/* Documents Name ------------------ */}
<div className="user_Details_paragraph">
            <label>Documents_Name:</label>
              <input 
                type="text"
                className="user_Details_span focus:outline-none focus:shadow-outline w-full bg-transparent  px-3 py-1 border-b-2  border-gray-600 "
              />
            </div>

{/* Documents File ------------------ */}
            <div className="user_Details_paragraph">
            <label>File:</label>
              <input
                type="file"
                className="user_Details_span file-input  file-input-sm w-full max-w-x"
              />
            </div>

          </div>
        </div>
    );
};

export default UserDetailsInfo;