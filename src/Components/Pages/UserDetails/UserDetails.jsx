import { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import axios from "axios";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [imageUpload, setImageUpload] = useState([]) 
  const navigate = useNavigate();
  const avatarUrl = useRef(
    "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
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
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
    }
  }, [navigate]);


// upload image method -----------------
const handleImageUpload = () => {
// axios.post("YOUR_UPLOAD_ENDPOINT",{image: avatarUrl.current, })
// .then((response) => {
// console.log("Image uploaded successfully:", response.data);
// })
// .catch((error) => {
// console.error("Error uploading image:", error);
// });
console.log(avatarUrl.current);
};

// const handlesubmit =() => {

// axios.post("")

// }

  return (
    <div>
      <h1 className="pt-[100px] text-2xl text-center ">
        Welcome <span>{userDetails?.name}</span>
      </h1>
      {/* parent div  */}
      <div>
        {/* fixed div  image upload */}
        <div className="flex flex-col items-center py-12">
      <div className="relative">
        <img
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
      <button onClick={handleImageUpload} className='mt-[30px] hover:underline'>Upload</button>
    </div>
        {/* Educational informaiton*/}
        <div></div>
      </div>
    </div>
  );
};

export default UserDetails;
