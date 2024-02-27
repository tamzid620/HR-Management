import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import axios from "axios";
import "./UserDetails.css";

const UserDetailsImg = () => {
  const [getToken, setGetToken ] = useState([]) ; 
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const avatarUrl = useRef(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (upImage) => {
    avatarUrl.current = upImage;
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
      axios.get("https://backend.ap.loclx.io/api/login", {
         headers :headers
        })
      .then(res => {
        setGetToken(res.data) ;
      })
      .catch(error => {
        console.error("Error uploading image:", error);
      });
    }
  }, [navigate]);

  // upload input  image method -----------------
  // const handleImageUpload = (e) => {

  //     const user = JSON.parse(localStorage.getItem("user"));
  //     const headers = {
  //       accept: "application/json",
  //       Authorization: "Bearer " + user.token,
  //     };

  //     e.preventDefault();
  //     const data = new FormData();
  //  data.append("image", image);
  //     console.log("Selected Image:", image);

  //     axios
  //       .post("https://backend.ap.loclx.io/api/save-photo", data, { headers })
  //       .then((res) => {
  //           if(res.data.status === '201'){
  //               Swal.fire({
  //                   icon: "success",
  //                   title: res.data.message,
  //                   showConfirmButton: false,
  //                   timer: 2500
  //                 });
  //                 setImageUpload(res.data);
  //         }
  //          else if (res.data.status === '403'){
  //               Swal.fire({
  //                   icon: "success",
  //                   title: res.data.message,
  //                   showConfirmButton: false,
  //                   timer: 2500
  //                 });
  //                 setImageUpload(res.data);
  //         }
  //       })
  //       .catch((error) => {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Error uploading image",
  //           showConfirmButton: false,
  //           timer: 2500
  //         });
  //         console.error("Error uploading image:", error);
  //       });
  //       console.log(avatarUrl.current);
  //       console.log(imageUpload);
  //   };

  // upload image method -----------------
  const handleImageUpload = () => {
    const data = new FormData();
    data.append("image", image);
    data.append("avatarUrl", avatarUrl.current);

    axios
      .post("https://backend.ap.loclx.io/api/save-photo", data)
      .then((res) => {
        if (res.data.status === "201") {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
          setImage(res.data);
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
          title: "Error uploading image",
          showConfirmButton: false,
          timer: 2500,
        });
      });
    console.log("avatarURl:" ,avatarUrl.current);
    console.log("image:",image);
  };

  return (
    <div className="flex flex-col items-center py-12">
      {/* <input onChange={handleImage} type="file" name="image" id="" /> */}

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
