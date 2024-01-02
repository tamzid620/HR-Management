import { IoIosSpeedometer } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div>
      {/* Dashboard section  */}
      <Link to="/">
        <li className="flex font-semibold text-lg mb-3 ">
          <span className="flex items-center w-[250px] rounded-r-full bg-[#191c24] hover:bg-transparent p-2 border-l-4 border-white">
            <IoIosSpeedometer className="text-white me-2" size={20} /> Dashboard
          </span>
        </li>
      </Link>
      {/* Dashboard section  */}
      <Link to="/adminLogin">
        <li className="flex font-semibold text-lg mb-3 ">
          <span className="flex items-center w-[250px] rounded-r-full bg-[#191c24] hover:bg-transparent p-2 border-l-4 border-white">
            <IoIosSpeedometer className="text-white me-2" size={20} /> Login
          </span>
        </li>
      </Link>

      {/* Student Information section */}
      <details className="dropdown mb-3 w-[250px]">
        <summary className=" rounded-r-full border-l-4 border-white bg-[#191c24] p-2 w-full btn text-white hover:btn-ghost ">
          <IoIosSpeedometer className="text-white -ms-12" size={20} />
          Student Information <MdArrowDropDown size={20} />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#25476a] border rounded-box w-52 ">
          <Link to="/pendingStudent">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              Pending Students
            </li>
          </Link>
          <hr className="mt-1" />
          <Link to="/allStudent">
            <li className="py-2 font-bold text-md hover:bg-blue-500 rounded-xl ps-2">
              All Students
            </li>
          </Link>
        </ul>
      </details>
    </div>
  );
};

export default NavList;
