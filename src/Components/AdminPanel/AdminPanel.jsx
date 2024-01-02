import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { ProfileMenu } from "../Shared/SearchPanel/ProfileMenu";
import { NotificationsMenu } from "../Shared/SearchPanel/NotificationsMenu";
import { MessagesMenu } from "../Shared/SearchPanel/MessagesMenu";
import { FaSearch } from "react-icons/fa";
import NumberStatus from "../Shared/NumberStatus";
import ChartOne from "../Shared/ChartFiles/ChartOne";
import ChartTwo from "../Shared/ChartFiles/ChartTwo";
import DpTable from "../Shared/DpTable";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // onclick button --------------------
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <button
        className="z-10 mt-3 ms-3  lg:hidden  fixed p-2 bg-gray-800 text-white rounded-full"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaArrowAltCircleLeft /> : <RiMenu2Line />}
      </button>
      {/*------------------- Sidebar -----------------------*/}
      <nav
        className={`z-50 bg-[#25476a] text-white w-[280px] min-h-screen ${
          isSidebarOpen ? "block" : "lg:block md:hidden sm: hidden"
        }`}
      >
        {/* Sidebar content goes here */}
        {/* For example, you can include navigation links */}
        <div className="p-4 flex">
          <p className="text-2xl font-bold">Admin Panel</p>
          {/* nav close button  */}
          <p>
            <button
              className="ms-[50px] mt-1 z-10 lg:hidden md:flex fixed p-2 bg-gray-800 text-white rounded-full"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaArrowAltCircleLeft /> : "Open"}
            </button>
          </p>
          {/* Add your navigation links here */}
        </div>
      </nav>

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <div className="flex justify-between items-center ms-3 me-3">
          {/* search input  secttion  */}
          <div className="flex items-center w-[500px]">
            <input
              type="text"
              placeholder="Type here"
              className="sm: hidden md:hidden lg:flex input border pt-1 pb-1 border-blue-gray-900 rounded-md w-[500px] "
            />
            {/* search button  */}
            <button className=" ms-2 sm: hidden md:hidden lg:flex items-center justify-center w-[30px] h-[30px] ">
              {" "}
              <FaSearch className="text-white hover:text-blue-500" />{" "}
            </button>
          </div>
          {/*-------------------- menu section---------------  */}
          <div className="flex items-center gap-3 pt-3 pb-3">
            {/* Message menu Section  */}
            <MessagesMenu />
            {/* notification menu section  */}
            <NotificationsMenu />
            {/* profile menu section  */}
            <ProfileMenu />
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <NumberStatus />
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 mt-10">
            <ChartOne />
            <ChartTwo />
          </div>
          <DpTable/>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
