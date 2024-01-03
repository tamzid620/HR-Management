
import { FaSearch } from "react-icons/fa";
import { MessagesMenu } from "./MessagesMenu";
import { NotificationsMenu } from "./NotificationsMenu";
import { ProfileMenu } from "./ProfileMenu";

const SearchPanel = () => {
    return (
        <div className="flex justify-between items-center ms-3 me-3">
          {/* search input  secttion  */}
          <div className="flex items-center w-[500px]">
            <input
              type="text"
              placeholder="Type here"
              className="sm: hidden md:hidden lg:flex input border pt-1 pb-1 border-blue-gray-900 rounded-md w-[600px] "
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
    );
};

export default SearchPanel;