import { useState } from "react";
import AdminNav from "../../../../AdminPanel/AdminNav";
import SearchPanel from "../../../SearchPanel/SearchPanel";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLeedsAdd = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(''); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

const handleSubmit = () => {
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

  
  const data = new FormData();
  data.append("name", name);
  data.append("phoneNo", phoneNo);
  data.append("email", email);
  data.append("image", image);

  axios
    .post("https://backend.ap.loclx.io/api/", data, { headers })
    .then((res) => {
      if (res.data.status === "201") {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
        // setUserDetails({ eduInfo, docInfo, ...res.data })
      } else if (res.data.status === "403") {
        Swal.fire({
          icon: "error",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 2500,
      });
    });
 console.log("name:",name,"phoneNo:", phoneNo, "email:",email,"image:" ,image);
  }

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
              Leeds Add
            </h1>
            <hr className="border border-gray-300" />
            {/* ------------------------input  Section -------------------------  */}
            <section className="bg-gray-300 mx-[10px] p-[5px] mt-[10px] rounded-md">
            <div className="flex flex-col items-center mx-[10px]">
              {/* Name input */}
              <input
                type="text"
                onChange={handleNameChange}
                className="w-full my-2 p-2 border border-gray-400 rounded"
                placeholder="Name"
              />

              {/* Phone number input */}
              <input
                type="number"
                onChange={handlePhoneNoChange}
                className="w-full my-2 p-2 border border-gray-400 rounded"
                placeholder="Phone Number"
              />

              {/* Email input */}
              <input
                type="email"
                onChange={handleEmailChange}
                className="w-full my-2 p-2 border border-gray-400 rounded"
                placeholder="Email"
              />
              {/* Image input */}
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full my-2 p-2 border bg-white border-gray-400 rounded"
                placeholder="Upload Image"
              />

              {/* Submit button */}
              <button onClick={handleSubmit} className="bg-[#25476a] text-white px-4 py-2 rounded hover:bg-gray-500 my-2">
                Submit
              </button>
            </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLeedsAdd;
