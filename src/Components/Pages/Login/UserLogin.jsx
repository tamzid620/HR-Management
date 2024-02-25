import { useEffect, useState } from "react";
import adminloginbanner from "../../../../public/images/loginBackground.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import showPasswordIcon from "../../../../public/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../../../public/icons/show-password-icon-18.jpg";
import { IoPersonCircleSharp } from "react-icons/io5";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
      if (!e.target.value) {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const data = { email, password };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     Swal.fire({
  //       position: "center",
  //       icon: "warning",
  //       title: "You have to Login first",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     navigate("/userLogin");
  //   } else {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     const headers = {
  //       accept: "application/json",
  //       Authorization: "Bearer " + user.token,
  //     };

  //   }
  // }, [navigate]);

  // handle submit button -------------

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    axios.post(`http://backend.ap.loclx.io/api/login`, data)
    .then((res) => {
      if (res.data.status === "201") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.user.role === 2) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/userDetails");
        }else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/userLogin");
        }
      }
    });
  };

  const backgroundStyles = {
    backgroundImage: `url(${adminloginbanner})`,
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
          className="hidden bg-[#25476a] drop-shadow-2xl rounded-md px-8 pt-6 pb-8 mb-4 "
        >
          <h1 className="font-semibold text-white text-center mb-3">
            Please Login Here
          </h1>
          {/* email field  */}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Enter Gmail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <span className="text-red-600">{emailError}</span>
          </div>
          {/* password field  */}
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <span className="text-red-600">{passwordError}</span>
          </div>
          {/* login button  */}
          <div className="flex items-center justify-between">
            <button
              className="mt-10 bg-white hover:bg-yellow-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      {/* ------------------login div--------------------  */}
      <div
        style={{ minHeight: "100vh" }}
        className=" w-full  relative flex justify-center items-center bg-[#25476a] lg:rounded-s-full"
      >
        <div>
          {/* form logo  */}
          <div className="absolute z-10 -mt-5 ms-[160px] w-[55px] bg-gray-100 rounded-full flex justify-center items-center">
            <IoPersonCircleSharp size={55} className="text-[#25476a]" />
          </div>

          {/* form section  */}
          <form
            onSubmit={handleSubmit}
            className="relative w-[380px] bg-gray-300 drop-shadow-2xl rounded-md px-8 pt-6 pb-8 mb-4 "
          >
            <h1 className="font-semibold text-[#25476a] text-center mt-8 mb-3">
              Please Login Here
            </h1>
            {/* email field  */}
            <div className="mb-4">
              <label
                className="block text-[#25476a] text-sm font-bold mb-2"
                htmlFor="username"
              >
                Enter Gmail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <span className="text-red-600">{emailError}</span>
            </div>
            {/* password field  */}
            <div className="mb-6">
              <label
                className="block text-[#25476a] text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
              <span className="text-red-600">{passwordError}</span>
            </div>
            {/* login button  */}
            <div className="flex items-center justify-between">
              <button
                className="mt-5 bg-[#25476a] hover:bg-gray-500 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Login
              </button>
            </div>
            {/* extra paragraph -------------  */}

            <p className="mt-3 text-sm">
              If you are a student and do not have an account yet, please
              <div className="flex items-center">
                register here :{" "}
                <button className="bg-[#25476a] hover:bg-gray-500 text-white hover:text-black  font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a href="/userSignup">Signup</a>
                </button>{" "}
                <span className="ms-2 me-2">or</span>
                <button className="bg-[#25476a] hover:bg-gray-500 text-white hover:text-black  font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a href="/">Return home</a>
                </button>
              </div>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
