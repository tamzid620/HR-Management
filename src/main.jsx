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
import AdminLeeds from "./Components/Shared/DashBoard/LeadMangement/AdminLeeds";
import AdminSubLeeds from "./Components/Shared/DashBoard/LeadMangement/AdminSubLeeds";
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
import UserDetails from "./Components/Pages/Login/UserDetails";

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
// Admin Section ----------------------------
      {
        path: "/adminLogin",
        element: <AdminLogin/>
      },
      {
        path: "/dp",
        element: <AdminPanel/>
      },
// AdminDashBoard section --------------------------------------------------------
// Lead Management --------------------
      {
        path: "/AdminContracts",
        element: <AdminContracts/>
      },
      {
        path: "/AdminLeeds",
        element: <AdminLeeds/>
      },
      {
        path: "/AdminSubLeeds",
        element: <AdminSubLeeds/>
      },
// Finance --------------------      
      {
        path: "/AdminEstimates",
        element: <AdminEstimates/>
      },
      {
        path: "/AdminInvoice",
        element: <AdminInvoice/>
      },
      {
        path: "/AdminPayment",
        element: <AdminPayment/>
      },
      {
        path: "/AdminCreditNote",
        element: <AdminCreditNote/>
      },
// Tickets -------------------- 
      {
        path: "/AdminTickets",
        element: <AdminTickets/>
      },
// Message -------------------- 
      {
        path: "/AdminMessage",
        element: <AdminMessages/>
      },
// NOtice Board -------------------- 
      {
        path: "/AdminNoticeBoard",
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
