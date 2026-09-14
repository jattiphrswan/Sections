import React from "react";
import Logo from "../../assets/logo.png"; // Adjust the path as necessary
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode"; // Import the DarkMode component

const Navbar = () => {
  return (
    <div className="shadow-md bg-white  dark:bg-gray-900 dark:text-white duration-200 relative   z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
              <img src={Logo} alt="Logo" className="w-10 uppercase " />
              Shopsy
            </a>
          </div>
          {/* search button */}
          <div className="flex items-center  justify-between gap-4 ">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch
                /* Search Icon */ className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            {/* user order button */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-l from-orange-500 to-oranges-600  text-white px-4 py-2 rounded-full hover:transition-colors duration-300 flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Order{" "}
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* darkmode switch */}
            <div>
                < DarkMode />
            </div>
          </div>
        </div>
      </div>

      <div>{/* lower navbar */}</div>
    </div>
  );
};

export default Navbar;
