import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { ThemeProvider } from "@material-tailwind/react";
import AdminLogin from "./Components/Pages/Login/AdminLogin";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import UserLogin from "./Components/Pages/Login/UserLogin";
import UserSignUp from "./Components/Pages/Login/UserSignUp";
import AdminContracts from "./Components/Shared/DashBoard/LeadMangement/AdminContracts";
import AdminEstimates from "./Components/Shared/DashBoard/Finance/AdminEstimates";
import AdminInvoice from "./Components/Shared/DashBoard/Finance/AdminInvoice";
import AdminPayment from "./Components/Shared/DashBoard/Finance/AdminPayment";
import AdminCreditNote from "./Components/Shared/DashBoard/Finance/AdminCreditNote";
import AdminTickets from "./Components/Shared/DashBoard/Tickets/AdminTickets";
import AdminMessages from "./Components/Shared/DashBoard/Message/AdminMessages";
import AdminNoticeBoard from "./Components/Shared/DashBoard/NoticeBoard/AdminNoticeBoard";
import EnterOTP from "./Components/Pages/EnterOTP/EnterOTP";
import ConfirmPhoneNo from "./Components/Pages/ConfirmPhoneNo/ConfirmPhoneNo";
import ConfirmPassword from "./Components/Pages/ConfirmPassword/ConfirmPassword";
import UserDetails from "./Components/Pages/UserDetails/UserDetails";
import UdBackup from "./Components/Pages/UserDetails/UdBackup";
import ContractPage from "./Components/Pages/UserDetails/ContractPage/ContractPage";
import ConfirmContractPage from "./Components/Pages/UserDetails/ContractPage/ConfirmContractPage";
import AdminEnrolledList from "./Components/Shared/DashBoard/LeadMangement/AdminEnrolled/AdminEnrolledList";
import AdminEnrolledEdit from "./Components/Shared/DashBoard/LeadMangement/AdminEnrolled/AdminEnrolledEdit";
import AdminUpcomingStudent from "./Components/Shared/DashBoard/LeadMangement/AdminUpcomingStudent";
import AdminEnrolledDetails from "./Components/Shared/DashBoard/LeadMangement/AdminEnrolled/AdminEnrolledDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
// user section --------------------
      {
        path: "/udb",
        element: <UdBackup/>
      },
      {
        path: "/userLogin",
        element: <UserLogin/>
      },
      {
        path: "/userSignup",
        element: <UserSignUp/>
      },
      {
        path: "/confirmPhoneNo",
        element: <ConfirmPhoneNo/>
      },
      {
        path: "/enterOtp",
        element: <EnterOTP/>
      },
      {
        path: "/confirmPassword",
        element: <ConfirmPassword/>
      },
      {
        path: "/userDetails",
        element: <UserDetails/>
      },
      {
        path: "/contractPage",
        element: <ContractPage/>
      },
      {
        path: "/confirmContractPage",
        element: <ConfirmContractPage/>
      },
// Admin Section ----------------------------
      {
        path: "/adminLogin",
        element: <AdminLogin/>
      },
      {
        path: "/dp",
        element: <AdminPanel/>
      },
// AdminDashBoard section *****************************************************

// Lead Management ------
      {
        path: "/adminContracts",
        element: <AdminContracts/>
      },
      {
        path: "/adminEnrolledList",
        element: <AdminEnrolledList/>
      },
      {
        path: "/adminEnrolledEdit/:EnrolledId",
        element: <AdminEnrolledEdit/>
      },
      {
        path: "/adminEnrolledDetails",
        element: <AdminEnrolledDetails/>
      },
      {
        path: "/adminUpcomingStudents",
        element: <AdminUpcomingStudent/>
      },   
//------------------------------------- Finance -------------------------------------  
      {
        path: "/adminEstimates",
        element: <AdminEstimates/>
      },
      {
        path: "/adminInvoice",
        element: <AdminInvoice/>
      },
      {
        path: "/adminPayment",
        element: <AdminPayment/>
      },
      {
        path: "/adminCreditNote",
        element: <AdminCreditNote/>
      },
//------------------------------------- Tickets ------------------------------------- 
      {
        path: "/adminTickets",
        element: <AdminTickets/>
      },
//------------------------------------- Message ------------------------------------- 
      {
        path: "/adminMessage",
        element: <AdminMessages/>
      },
//------------------------------------- Notice Board ------------------------------------- 
      {
        path: "/adminNoticeBoard",
        element: <AdminNoticeBoard/>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
