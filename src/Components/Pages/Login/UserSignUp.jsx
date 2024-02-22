import { useEffect, useState } from "react";
import userloginbanner from "../../../../public/images/loginBackground.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setphoneNo] = useState("+880");



  useEffect(() => {
    const storedPhoneNo = localStorage.getItem("phoneNo");
    const storedEmail = localStorage.getItem("email");
    if (!storedPhoneNo || !storedEmail) {
    
      Swal.fire({
        icon: "warning",
        title: "You need to fillup this form first",
        showConfirmButton: false,
        timer: 2500
      });
    }

  }, [navigate]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlefatherNameChange = (e) => {
    setfatherName(e.target.value);
  };
  const handlemotherNameChange = (e) => {
    setmotherName(e.target.value);
  };
  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlephoneNoChange = (e) => {
    // setphoneNo(e.target.value);
    const inputValue = e.target.value;
    if (/^\+880\d*$/.test(inputValue) || /^\d*$/.test(inputValue)) {
      setphoneNo(inputValue)
    }
  };

  // handle button section ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    // data for localStorage --------
    localStorage.setItem("name", name);
    localStorage.setItem("fatherName", fatherName);
    localStorage.setItem("motherName", motherName);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
    localStorage.setItem("phoneNo", phoneNo);
    navigate("/confirmPhoneNo");
    setName('');
    setfatherName('');
    setmotherName('');
    setBirthDate('');
    setEmail('');
    setphoneNo('');
  }

  const backgroundStyles = {
    backgroundImage: `url(${userloginbanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={backgroundStyles}
      className="relative flex items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 bg-black opacity-20" />
      {/*------------------ transparent  div-------------------  */}
      <div className="md:hidden lg:flex w-full relative flex justify-center">
        {/* form section  */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="hidden bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="font-semibold text-center mb-3">
            Please Register Here
          </h1>
          {/* name section   */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          {/* motherName and fatherName section  */}
          <div className="flex gap-2 mb-3">
            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label htmlFor="fatherName">Father's Name:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Father Name"
                type="text"
                name="fatherName"
                id="fatherName"
                value={fatherName}
                onChange={handlefatherNameChange}
              />
            </div>
            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label htmlFor="motherName">Mother's Name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Mother Name"
                type="text"
                name="motherName"
                id="motherName"
                value={motherName}
                onChange={handlemotherNameChange}
              />
            </div>
          </div>

          {/* Phone and birthDate section  */}
          <div className="flex gap-2 mb-3">
            <div>
              <label htmlFor="phoneNo">Phone Number:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Phone Number"
                type="number"
                name="phoneNo"
                id="phoneNo"
                value={phoneNo}
                onChange={handlephoneNoChange}
              />
            </div>
            <div>
              <label htmlFor="birthDate">Birthdate:</label>
              <input
                className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="birthDate"
                id="birthDate"
                value={birthDate}
                onChange={handleBirthDateChange}
              />
            </div>
          </div>

          {/* email section  */}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

          <button
            className="bg-blue-300 hover:bg-blue-600 font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
            type="submit"
          >
            Submit
          </button>

          {/* extra paragraph -------------  */}

          <p className="mt-3 text-sm">
            already have an account? ,please
            <div className="flex items-center">
              register here :{" "}
              <button className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                <a href="/login">Login</a>
              </button>{" "}
              <span className="ms-2 me-2">or</span>
              <button className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                <a href="/">Return Home</a>
              </button>
            </div>
          </p>
        </form>
      </div>
    {/* ------------------Signup div--------------------  */}
      <div
        style={{ minHeight: "100vh" }}
        className=" w-full  relative flex justify-center items-center"
      >
        <div>
          {/* form section  */}
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-2 pb-8 mb-4 w-[500px]"
          >
            <h1 className="font-semibold text-center text-[#25476a]">
              Please Register Here
            </h1>
            {/* name section   */}
            <div>
              <label htmlFor="name">Name:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            {/* motherName and fatherName section  */}
            <div className="flex gap-2 mb-3">
              <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label htmlFor="fatherName">Father's Name:</label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Father Name"
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  value={fatherName}
                  onChange={handlefatherNameChange}
                />
              </div>
              <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label htmlFor="motherName">Mother's Name:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Mother Name"
                  type="text"
                  name="motherName"
                  id="motherName"
                  value={motherName}
                  onChange={handlemotherNameChange}
                />
              </div>
            </div>

            {/* Phone and birthDate section  */}
            <div className="flex gap-2 mb-3">
              <div>
                <label htmlFor="phoneNo">Phone Number:</label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Phone Number"
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  value={phoneNo}
                  onChange={handlephoneNoChange}
                />
              </div>
              <div>
                <label htmlFor="birthDate">Birthdate:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  value={birthDate}
                  onChange={handleBirthDateChange}
                />
              </div>
            </div>

            {/* email section  */}
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

            {/* submit button div  */}
            <div className="flex justify-center">
              <button
                className=" bg-[#25476a] hover:bg-gray-500 text-white text-xl hover:text-black font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline  mt-3"
                type="submit"
              >
                Submit
              </button>
            </div>

            {/* extra paragraph -------------  */}

            <p className="mt-3 text-sm">
              already have an account? ,please
              <div className="flex items-center">
                register here :{" "}
                <button className="bg-[#25476a] hover:bg-gray-500 text-white hover:text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a href="/userLogin">Login</a>
                </button>{" "}
                <span className="ms-2 me-2">or</span>
                <button className="bg-[#25476a] hover:bg-gray-500 text-white hover:text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a href="/">Return Home</a>
                </button>
              </div>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default UserSignUp;
