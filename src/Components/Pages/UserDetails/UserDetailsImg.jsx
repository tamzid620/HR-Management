import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import axios from "axios";
import "./UserDetails.css";

const UserDetailsImg = () => {
  const [imageUpload, setImageUpload] = useState([]);
  const navigate = useNavigate();
  const avatarUrl = useRef(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (image) => {
    avatarUrl.current = image;
  };
  useEffect(() => {
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
  }, [navigate]);



// upload image method -----------------
const handleImageUpload = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const headers = {
    accept: "application/json",
    Authorization: "Bearer " + user.token,
  };
  
  // Convert base64 string to Blob
  const base64ToBlob = (base64String) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: "image/jpeg" }); 
  };

  const blob = base64ToBlob(avatarUrl.current.split(",")[1]);

  // Create a File object from Blob
  const image = new File([blob], "avatar.jpg", { type: "image/jpeg" });

  const data = new FormData();
  data.append("image", image);

  // const imageData = localStorage.getItem("image");
  // if (!imageData) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Error",
  //     text: "Image data not found in localStorage",
  //     showConfirmButton: false,
  //     timer: 2500,
  //   });
  //   return;
  // }
  // const image = new Blob([imageData], { type: "image/png" });
  // const formData = new FormData();
  // formData.append("image", image);

  axios
    .post("https://backend.ap.loclx.io/api/save-photo", data, {
      headers
    })
    .then((res) => {
      if (res.status === 201) { 
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(res.data.message);
        setImageUpload(res.data); 
      } else if (res.status === 403) { 
        Swal.fire({
          icon: "error",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(res.data.message);
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
  console.log("avatarUrl.current", avatarUrl.current);
  console.log("image",image);
};

  
  return (
    <div className="flex flex-col items-center py-12">

      <div className="relative">
        <img
          name="file"
          src={avatarUrl.current}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-100 hover:bg-gray-400 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>

      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
      <button onClick={handleImageUpload} className="mt-[30px] hover:underline">
        Upload
      </button>
    </div>
  );
};

export default UserDetailsImg;
