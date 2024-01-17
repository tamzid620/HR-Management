import { useState } from "react";
import userloginbanner from "../../../../public/images/loginBackground.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import showPasswordIcon from "../../../../public/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../../../public/icons/show-password-icon-18.jpg";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [phoneNo, setphoneNo] = useState("+880");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlephoneNoChange = (e) => {
    // setphoneNo(e.target.value);
    const inputValue = e.target.value;
    if (/^\+880\d*$/.test(inputValue) || /^\d*$/.test(inputValue)) {
      setphoneNo(inputValue);
    }
  };

  // handle button section ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("fatherName", fatherName);
    data.append("motherName", motherName);
    data.append("birthDate", birthDate);
    data.append("email", email);
    data.append("password", password);
    data.append("phoneNo", phoneNo);
    data.append("image", image);
    console.log(data);
    console.log("Selected Image:", image);
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    // data for localStorage --------
    localStorage.setItem("name", name);
    localStorage.setItem("fatherName", fatherName);
    localStorage.setItem("motherName", motherName);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("phoneNo", phoneNo);

    axios
      .post("https://backend.ap.loclx.io/api/student-reg", data, {
        headers: headers,
      })
      .then((res) => {
        console.log("Data:", res.data);
        Swal.fire({
          position: "center",
          icon: "warning",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
    // setName('');
    // setfatherName('');
    // setmotherName('');
    // setBirthDate('');
    // setEmail('');
    // setPassword('');
    // setphoneNo('');
    // setImage('');
  };

  // data for localStorage --------
  // const localStorageData = [name, fatherName, motherName, birthDate,email, password, phoneNo, image]
  // localStorage.setItem("registerData", JSON.stringify(localStorageData));

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

          {/* email and password section  */}
          <div className="flex gap-2 mb-3">
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
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  {showPassword ? (
                    <img
                      className="w-[20px] h-[20px]"
                      src={showPasswordIcon}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[20px] h-[20px]"
                      src={hidePasswordIcon}
                      alt=""
                    />
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* picture section  */}
          <div>
            <label htmlFor="file">Picture: </label> <br />
            <input
              // required
              className="file-input file-input-bordered file-input-primary w-full max-w-lg"
              type="file"
              name="file"
              id="file"
              // value={image}
              onChange={handleImageChange}
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
      {/* ------------------login div--------------------  */}
      <div
        style={{ minHeight: "100vh" }}
        className=" w-full  relative flex justify-center items-center "
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

            {/* email and password section  */}
            <div className="flex gap-2 mb-3">
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
              <div>
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    className="shadow appearance-none border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span
                    onClick={handleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  >
                    {showPassword ? (
                      <img
                        className="w-[20px] h-[20px]"
                        src={showPasswordIcon}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-[20px] h-[20px]"
                        src={hidePasswordIcon}
                        alt=""
                      />
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* picture section  */}
            <div>
              <label htmlFor="file">Picture: </label> <br />
              <input
                // required
                className="file-input file-input-bordered file-input-info w-full max-w-xs"
                type="file"
                name="file"
                id="file"
                // value={image}
                onChange={handleImageChange}
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
