import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Layout = () => {

const location = useLocation();
const noHeaderFooter  = 
// user Section -----------
location.pathname.includes('userLogin') ||
location.pathname.includes('userSignup') ||
location.pathname.includes('contractPage') ||
// OTP Section ------------------
location.pathname.includes('confirmPhoneNo') ||
location.pathname.includes('enterOtp') ||
location.pathname.includes('confirmPassword') ||
// Admin Section ----------
location.pathname.includes('adminLogin') ||
location.pathname.includes('dp') ||
// Lead Management ----------
location.pathname.includes('AdminContracts') ||
location.pathname.includes('AdminLeeds') ||
location.pathname.includes('AdminSubLeeds') ||
// Finance --------------------
location.pathname.includes('AdminEstimates') ||
location.pathname.includes('AdminInvoice') ||
location.pathname.includes('AdminPayment') ||
location.pathname.includes('AdminCreditNote') ||
// Tickets------------------
location.pathname.includes('AdminTickets') ||
// Message------------------
location.pathname.includes('AdminMessage') ||
// Notice Board------------------
location.pathname.includes('AdminNoticeBoard') 

    return (
        <div>
            {noHeaderFooter || <Navbar />} 
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Layout;