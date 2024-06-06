import { IoIosSpeedometer } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div>
      {/* Dashboard section  */}
      <Link to="/dp">
        <li className="flex font-semibold text-lg mb-3 ">
          <span className="flex items-center w-[250px] rounded-r-full text-sm  bg-[#191c24] hover:bg-transparent p-3 border-l-4 border-white">
            <IoIosSpeedometer className="text-white me-2" size={20} /> Dashboard
          </span>
        </li>
      </Link>

      {/* Lead Management section */}
      <details className="dropdown mb-3 w-[250px]">
        <summary className=" rounded-r-full border-l-4 border-white bg-[#191c24] p-2 w-full btn text-white hover:btn-ghost ">
          <IoIosSpeedometer className="text-white -ms-[48px]" size={20} />
          Lead Management <MdArrowDropDown size={20} />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#25476a] border rounded-box w-52 ">
          <Link to="/adminContracts">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Contracts
            </li>
          </Link>
          <hr className="mt-1" />
          <Link to="/adminEnrolledList">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Enrolled Students
            </li>
          </Link>
          <hr className="mt-1" />
          <Link to="/adminUpcomingStudentsList">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Upcoming Students
            </li>
          </Link>
        </ul>
      </details>

      {/* Finance section */}
      <details className="dropdown mb-3 w-[250px]">
        <summary className=" rounded-r-full border-l-4 border-white bg-[#191c24] p-2 w-full btn text-white hover:btn-ghost ">
          <IoIosSpeedometer className="text-white -ms-[120px]" size={20} />
          Finance <MdArrowDropDown size={20} />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#25476a] border rounded-box w-52 ">
          <Link to="/adminEstimates">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Estimates
            </li>
          </Link>
          <hr className="mt-1" />
          <Link to="/adminInvoice">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Invoice
            </li>
          </Link>
          <hr className="mt-1" />
          <Link to="/adminPayment">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Payment
            </li>
          </Link>
          <hr className="mt-1" />
          <Link to="/adminCreditNote">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Credit Note
            </li>
          </Link>
        </ul>
      </details>

      {/* Tickets section  */}
      <Link to="/adminTickets">
        <li className="flex font-semibold text-lg mb-3 ">
          <span className="flex items-center w-[250px] rounded-r-full text-sm  bg-[#191c24] hover:bg-transparent p-3 border-l-4 border-white">
            <IoIosSpeedometer className="text-white me-2" size={20} /> Tickets
          </span>
        </li>
      </Link>
      {/* Message section  */}
      <Link to="/adminMessage">
        <li className="flex font-semibold text-lg mb-3 ">
          <span className="flex items-center w-[250px] rounded-r-full text-sm  bg-[#191c24] hover:bg-transparent p-3 border-l-4 border-white">
            <IoIosSpeedometer className="text-white me-2" size={20} /> Message
          </span>
        </li>
      </Link>
      {/* NoticeBoard section  */}
      <Link to="/adminNoticeBoard">
        <li className="flex font-semibold text-lg mb-3 ">
          <span className="flex items-center w-[250px] rounded-r-full text-sm  bg-[#191c24] hover:bg-transparent p-3 border-l-4 border-white">
            <IoIosSpeedometer className="text-white me-2" size={20} /> Notice Board
          </span>
        </li>
      </Link>


    </div>
  );
};

export default NavList;
