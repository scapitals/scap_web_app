import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { MainLogo } from ".";
const Navigation = () => {
  const [open, setOpen] = useState(false);

  document
  return (
    <nav className="bg-transparent">
      <div className="flex items-center font-medium justify-around">
        <div className="z-20 p-5 md:w-auto w-full flex justify-between">
          <MainLogo />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-7 px-3 inline-block">
               Planning Service
            </Link>
          </li>
          <div className="px-3 text-left md:cursor-pointer group">
            <div
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
            >

              Investment Products
              <span className="text-xl md:hidden inline">
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FaAngleDown />
              </span>
            </div>
            <div>
              <div className="absolute z-10 top-10 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div
                    className="w-4 h-4 left-3 absolute 
                    mt-1 bg-[#f1f1f1] dark:bg-[#1f2937] rotate-45"
                  ></div>
                </div>
                <div className="bg-[#f1f1f1] dark:bg-[#1f2937] p-5 w-48 flex flex-col gap-10">
                  <li className="text-lg text-black dark:text-white  my-1">
                    <Link to="/stocks" className="hover:text-primary">
                      Stock
                    </Link>
                  </li>
                  <li className="text-lg text-black dark:text-white  my-1">
                    <Link to="/forex" className="hover:text-primary">
                      Forex
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
            <Link to="/login">
             <Button btntext="login" />   
            </Link>
          
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-1 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-1 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-1 px-3 inline-block">
               Planning Service
            </Link>
          </li>
          <li>
            <Link to="/stocks" className="py-1 px-3 inline-block">
               Stocks
            </Link>
          </li>
          <li>
            <Link to="/forex" className="py-1 px-3 inline-block">
               Forex
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-1 px-3 inline-block">
               Contact
            </Link>
          </li>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-1 flex justify-between items-center md:pr-0 pr-5 group">
              Financial
              <span className="text-xl md:hidden inline"></span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FaAngleDown />
              </span>
            </h1>
            <div>
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div
                    className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div className="bg-white p-2 flex flex-col gap-10">
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary">
                      Stock
                    </Link>
                  </li>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary">
                      Stock
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <Link to="/login">
             <Button btntext="Login"/>   
            </Link>
            
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
