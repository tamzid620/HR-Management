import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import {
  FaRegEye,
  FaShoppingCart,
  FaShoppingBag,
  FaUserFriends,
} from "react-icons/fa";

const NumberStatus = () => {

  return (
    <div
      className="
        grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-5 mt-10 mx-5"
    >
      {/* ----------------------Number Status ------------------------- */}
      {/* cart-One  */}
      <div className=" rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
        <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
          <FaRegEye size={25} />
        </div>

        <h4 className="text-2xl font-semibold text-black">$3.456K</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">Total views</span>
          <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
            0.43% <BsArrowUp />
          </span>
        </div>
      </div>
      {/* cart-two  */}
      <div className=" rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
        <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
          <FaShoppingCart size={22} />
        </div>

        <h4 className="text-2xl font-semibold text-black">$45,2k</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">Total Profit</span>
          <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
            4.35% <BsArrowUp />
          </span>
        </div>
      </div>
      {/* cart-three  */}
      <div className=" rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
        <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
          <FaShoppingBag size={22} />
        </div>

        <h4 className="text-2xl font-semibold text-black">2,450</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">Total Product</span>
          <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
            2.59% <BsArrowUp />
          </span>
        </div>
      </div>
      {/* cart-four  */}
      <div className=" rounded-lg  shadow-md shadow-gray-500  bg-white text-black py-6 px-6">
        <div className="flex mb-3 h-[50px] w-[50px] items-center justify-center rounded-full text-blue-900 bg-gray-300">
          <FaUserFriends size={22} />
        </div>

        <h4 className="text-2xl font-semibold text-black">1200</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-400 font-bold">
            Total Students
          </span>
          <span className=" flex items-center gap-1 text-md font-semibold text-red-500">
            0.95% <BsArrowDown />
          </span>
        </div>
      </div>

    </div>
  );
};

export default NumberStatus;
