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
    const user = localStorage.getItem("user");

    if (!token && !user) {
    // if (!token && user?.role === "1") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have to Login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/adminLogin");
    } else {
      ("");
    }
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <AdminNav />

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <SearchPanel />
        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <AdminHomePage />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
