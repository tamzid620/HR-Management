import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import axios from "axios";
import "./UserDetails.css";

const UserDetailsImg = () => {
  const [uploading, setUploading] = useState(false);
  const [imageUpload, setImageUpload] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [userImg, setUserImg] = useState(null);
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
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    axios
      .get("https://backend.ap.loclx.io/api/leed-info", {
        headers,
      })
      .then((res) => {
        setUserImg(res.data?.file || null);
      });
    console.log("user:", userImg);
    // user informaiton  get method-------------------
    axios
      .get("https://backend.ap.loclx.io/api/leed-info", {
        headers,
      })
      .then((res) => {
        setUserInfo(res.data);
      });
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

    setUploading(true);
    axios
      .post("https://backend.ap.loclx.io/api/save-photo", data, { headers })
      .then((res) => {
        if (res.data.status === "201") {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
          console.log(res.data.message);
          setImageUpload(res.data);
        } else if (res.data.status === "403") {
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
      })
      .finally(() => {
        setUploading(false); // Set uploading to false when upload completes or fails
      });

    console.log("avatarUrl.current", avatarUrl.current);
    console.log("image---", image);
  };

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1">
      {/*------------------------user informaiton image--------------- */}
      <div className="flex flex-col items-center py-12">
        <div className="relative">
          <img
            name="file"
            src={userImg || avatarUrl.current}
            value={userImg}
            alt="Avatar"
            className="w-[250px] h-[250px] rounded-full border-2 border-gray-400"
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
        <button
          onClick={handleImageUpload}
          className="mt-[30px] hover:underline"
        >
          Upload
        </button>

        {/* Loading indicator */}
        {uploading && (
          <progress className="progress bg-red-500 w-56"></progress>
        )}
      </div>
      {/*------------------------user informaiton div--------------- */}
      <div className="container mx-auto leading-[50px] font-semibold mt-[50px]">
        <h1 className="text-3xl">
          Welcome <span></span>
        </h1>

        <p className="user_Details_paragraph">
          Name: <span className="user_Details_span">{userInfo.user?.name}</span>
        </p>
        <p className="user_Details_paragraph">
        Father Name: <span className="user_Details_span">{userInfo.user?.fatherName}</span>
        </p>
        <p className="user_Details_paragraph">
        Mother Name: <span className="user_Details_span">{userInfo.user?.motherName}</span>
        </p>
        <p className="user_Details_paragraph">
        Birth Date: <span className="user_Details_span">{userInfo.user?.birthDate}</span>
        </p>
        <p className="user_Details_paragraph">
        Email: <span className="user_Details_span">{userInfo.user?.email}</span>
        </p>
      </div>
    </div>
  );
};

export default UserDetailsImg;
