import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const noHeaderFooter =
    // user Section -----------
    location.pathname.includes("userLogin") ||
    location.pathname.includes("userSignup") ||
    location.pathname.includes("contractPage") ||
    location.pathname.includes("confirmContractPage") ||
    // OTP Section ------------------
    location.pathname.includes("confirmPhoneNo") ||
    location.pathname.includes("enterOtp") ||
    location.pathname.includes("confirmPassword") ||
    // Admin Section ----------
    location.pathname.includes("adminLogin") ||
    location.pathname.includes("dp") ||
    // Lead Management ----------
    location.pathname.includes("adminContracts") ||
    location.pathname.includes("adminEnrolledList") ||
    location.pathname.includes("adminEnrolledEdit") ||
    location.pathname.includes("adminEnrolledDetails") ||
    location.pathname.includes("adminUpcomingStudentsList") ||
    location.pathname.includes("adminUpcomingStudentsEdit") ||
    location.pathname.includes("adminUpcomingStudentsDetails") ||
    // Finance --------------------
    location.pathname.includes("adminEstimates") ||
    location.pathname.includes("adminInvoice") ||
    location.pathname.includes("adminPayment") ||
    location.pathname.includes("adminCreditNote") ||
    // Tickets------------------
    location.pathname.includes("adminTickets") ||
    // Message------------------
    location.pathname.includes("adminMessage") ||
    // Notice Board------------------
    location.pathname.includes("adminNoticeBoard");

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Layout;
