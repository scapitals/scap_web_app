import { Navbar } from "../../components";
import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone, FaTelegram } from "react-icons/fa6";
import {SlEarphonesAlt} from "react-icons/sl"
import { Link } from "react-router-dom";
import AbtAsset from "../../../assets/about-hero.jpg";

const Herosection = () => {
  return (
    <div>
      <div className="h-[50vh] bg-abtimg bg-center bg-cover">
        <Navbar />
        <div className="container">
          <div></div>
        </div>
      </div>

      <div className="container py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border border-primary rounded w-fit bg-[#f1f1f1] dark:bg-[#1f2937]">
              <SlEarphonesAlt size={30}/>
            </div>
            <p>+1 (916) 857-3164</p>
            <p>Mon - Sat: 8:00 - 21:00 (GMT-8)</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border border-primary rounded w-fit bg-[#f1f1f1] dark:bg-[#1f2937]">
              <FaEnvelope size={30}/>
            </div>
            
            <p>support@spectrumcapitals.com</p>
            <p>24/7 Customer Support</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border border-primary rounded w-fit bg-[#f1f1f1] dark:bg-[#1f2937]">
              <FaLocationDot size={30}/>
            </div>
            <p className="text-center">Aberdeen Avenue, California, Santa Rosa, US</p>
            <p>Main Office Location</p>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-lg py-12 shadow-lg">
          <div className="h-[100%]">
            <img src={AbtAsset} alt="" className="h-[100%]" />
          </div>
          <form action="" className="w-full px-10 shadow-2xl rounded-2xl p-12 bg-[#f1f1f1] dark:bg-[#1f2937]">
            <div className="flex flex-row gap-3 w-full justify-between align-middle">
              <div className="flex flex-col gap-3">
                <label htmlFor="">Your Full Name</label>
                <input
                  type="email"
                  className="p-2 w-full rounded-lg border border-primary"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="">Email Address</label>
                <input
                  type="email"
                  className="p-2 w-full rounded-lg border border-primary"
                />
              </div>
            </div>

            <div className="flex flex-col py-4">
              <label htmlFor="">Subject</label>
              <input
                type="email"
                className="p-2 w-full rounded-lg border border-primary"
              />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                className="w-full border border-primary rounded-lg"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <button className="bg-primary rounded-xl py-2 px-4 text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="w-full">
          <iframe
            width="100%"
            height="500"
            // frameborder="0"
            scrolling="no"
            // marginheight={0}
            // marginwidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Aberdeen%20Avenue,%20California,%20Santa%20Rosa,%20US+(Spectrum%20Capitals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
