import { useState } from "react";
import showPasswordIcon from "../../../../public/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../../../public/icons/show-password-icon-18.jpg";
import axios from "axios";

const ConfirmPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword0, setShowPassword0] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [submitState, setSubmitState] = useState("");
  const [error, setError] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword0 = () => {
    setShowPassword0(!showPassword0);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
        setError("Passwords do not match");
        return;
    }
    setError("");

    const data = new FormData();
    data.append("email", email);
    data.append("confirmpassword", confirmpassword);

    axios
        .post("", data)
        .then((res) => {
            const responseData = res.data;
            setSubmitState(responseData);
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
        });
    console.log("email", email, "confirmpassword", confirmpassword);
    console.log(submitState);
};


  return (
    <div className="flex justify-center items-center h-screen">
      <form onClick={handleSubmit}>
        {/* email section  */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            placeholder="Your Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* password section  */}
        <div>
          <label htmlFor="password">Password:</label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
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
        {/*confirm password section  */}
        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="confirmpassword"
              type={showPassword0 ? "text" : "password"}
              name="confirmpassword"
              placeholder="rewrite password"
              value={confirmpassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span
              onClick={handleShowPassword0}
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            >
              {showPassword0 ? (
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
         {/* error message section */}
         {error && <div className="text-red-500">{error}</div>}
        {/* submit button div  */}
        <div className="flex justify-center">
          <button
            className=" bg-[#25476a] hover:bg-gray-500 text-white text-md hover:text-black py-1 px-2 rounded focus:outline-none focus:shadow-outline  mt-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmPassword;
