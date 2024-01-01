import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowUp,BsArrowDown } from "react-icons/bs";
import { FaRegEye , FaShoppingCart, FaShoppingBag ,FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NumberStatus = () => {

  const [studentData, setStudentData] = useState([]);
  const navigate = useNavigate();

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
      navigate("/login");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };

      axios
        .get(`https://backend.ap.loclx.io/api/admin-graph-first`, {
          headers: headers,
        })
        .then((res) => {
          const userData = res.data; 
          if(userData && userData.status === "401"){
            // setStudentData(res.data);
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/adminlogin");
          } else {
              setStudentData(res.data.student);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]);
  console.log("studentData------",studentData);

    return (
        <div className="
        lg:ms-8 lg:w-[900px] 
        md:ms-4 md:w-[800px] 
        sm: ms-10 sm: w-[900px] 
        grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-16 mt-10">
{/* ----------------------Number Status ------------------------- */}
 {/* cart-One  */}
 <div className="lg:w-[220px] md:w-[370px] sm: w-[280px] rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
      <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
        <FaRegEye size={25}/>
      </div>

          <h4 className="text-2xl font-semibold text-black">
            $3.456K
          </h4>
        <div  className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">Total views</span>
        <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
          0.43% <BsArrowUp/>
        </span>
        </div>

    </div>
 {/* cart-two  */}
 <div className="lg:w-[220px] md:w-[370px] sm: w-[280px] rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
      <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
        <FaShoppingCart  size={22}/>
      </div>

          <h4 className="text-2xl font-semibold text-black">
            $45,2k
          </h4>
        <div  className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">Total Profit</span>
        <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
          4.35% <BsArrowUp/>
        </span>
        </div>

    </div>
 {/* cart-three  */}
 <div className="lg:w-[220px] md:w-[370px] sm: w-[280px] rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
      <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
        <FaShoppingBag   size={22}/>
      </div>

          <h4 className="text-2xl font-semibold text-black">
            2,450
          </h4>
        <div  className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">Total Product</span>
        <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
          2.59% <BsArrowUp/>
        </span>
        </div>

    </div>
 {/* cart-four  */}
 <div className="lg:w-[220px] md:w-[370px] sm: w-[280px] rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
      <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
        <FaUserFriends  size={22}/>
      </div>

          <h4 className="text-2xl font-semibold text-black">
            {studentData}
          </h4>
        <div  className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">Total Students</span>
        <span className=" flex items-center gap-1 text-md font-semibold text-red-500">
          0.95% <BsArrowDown/>
        </span>
        </div>

    </div>


        </div>
    );
};

export default NumberStatus;