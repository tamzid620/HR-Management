

const EnterOTP = () => {


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid lg:grid-cols-1 md:grid-cols-2 sm: grid-cols-2">
        {/* phoneNo Input  */}
        <div>
          <label htmlFor="phoneNo">Phone Number:</label> <br />
          <input
            required
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            placeholder="Enter Phone Number"
            type="text"
            name="phoneNo"
            id="phoneNo"
            readOnly
          />
        </div>
        {/* OTP Input  */}
        <div>
          <label htmlFor="otp">Enter OTP:</label>
          <br />
          <input
            required
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            placeholder="Your Phone Number"
            type="number"
            name="otp"
            id="otp"
          />
        </div>
        {/* submit button div  */}
        <div className="flex justify-center">
          <button
            className=" bg-[#25476a] hover:bg-gray-500 text-white text-md hover:text-black py-1 px-2 rounded focus:outline-none focus:shadow-outline  mt-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
