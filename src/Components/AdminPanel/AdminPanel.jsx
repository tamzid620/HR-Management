import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SearchPanel from "../Shared/SearchPanel/SearchPanel";
import AdminHomePage from "./AdminHomePage";
import AdminNav from "./AdminNav";

const AdminPanel = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
   const userRole=  localStorage.getItem("user"); 

    if (!token) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have to Login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/adminlogin");
    } 
    else if (userRole.role ===  '1') {
      navigate("/dp");
    } 
    else if (userRole.role ===  '2') {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You are not eligible for this page",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/adminlogin");
    } 
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
<AdminNav/>

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
<SearchPanel/>
        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
         <AdminHomePage/>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
