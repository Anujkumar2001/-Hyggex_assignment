import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoReload } from "react-icons/io5";
import { TbCapture } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.jpeg"
import { CiCirclePlus } from "react-icons/ci";

const Main = () => {
  const [change, setChange] = useState(true);
  const handleClick = () => {
    setChange(!change);
  };
  return (
    <div className="w-[90%] m-auto mt-[68px]">
      <div className="flex items-center text-[18px]">
        <GoHome className="text-3xl" />
        <MdOutlineKeyboardArrowRight />
        <p className="text-[#696671]">FlashCard</p>
        <MdOutlineKeyboardArrowRight />
        <p className="text-[#696671]">Mathematics</p>
        <MdOutlineKeyboardArrowRight />
        <p className="text-[#06286E] font-semibold">Relation and Function</p>
      </div>
      <div className="mt-[64px] text-[32px] bg-gradient-to-r from-[#06286E] via-[#164Ec0] to-pink-500 text-transparent bg-clip-text font-bold">
        <h1>Relations and Functions (Mathematics)</h1>
        <div>
          <div className="flex items-center justify-center">
            <ul className="flex items-center text-[20px] font-normal gap-[40px] mt-[56px] text-[#696671]">
              <li className="text-[#06286E] font-bold border-b-2 border-[#06286E]">
                Study
              </li>
              <li>Quiz</li>
              <li>Test</li>
              <li>Game</li>
              <li>Others</li>
            </ul>
          </div>
          {/* -------------- */}
          <div className="w-full flex  justify-center mt-[32px] cursor-pointer relative">
            <div
              onClick={handleClick}
              className={`text-white w-[60%] flex flex-col rounded-[50px] h-[393px] bg-gradient-to-r from-[#1F80EB] via-[#2284F1] to-[#061C93] relative flipCard ${change ?'animation':"animation2"} addRotateAnimation absolute top-0 left-0`}
            >
              <div className=" absolute  w-full flex justify-between  text-white top-[34px] px-[34px]">
                <AiOutlineBulb />

                <HiSpeakerWave />
              </div>
              <div className="w-full flex-1 flex justify-center items-center ">
                <p>{change?'9+6+7x-2x-3':'5x+12'}</p>
              </div>
            </div>
            {/* <div
              onClick={handleClick}
              className="text-white w-[60%] flex flex-col rounded-[50px] h-[393px] bg-gradient-to-r from-[#1F80EB] via-[#2284F1] to-[#061C93] relative "
            >
              <div className=" absolute  w-full flex justify-between  text-white top-[34px] px-[34px]">
                <AiOutlineBulb />

                <HiSpeakerWave />
              </div>
              <div className="w-full flex-1 flex justify-center items-center ">
                <p>5x+12</p>
              </div>
            </div> */}
         
          </div>
          {/* ---------- */}
          <div className="flex text-[#06286E] items-center justify-center">
            <div className=" py-[46px] flex items-center gap-[140px] text-[40px] font-extrabold">
              <IoReload />
              <div className="flex items-center gap-[43px]">
                <IoIosArrowBack className="w-[60px] h-[60px] rounded-full bg-red-200 text-[18px] p-2 bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white  " />
                <p className=" text-xl">01/10</p>
                <IoIosArrowForward className="w-[60px] h-[60px] rounded-full bg-red-200 text-[18px] p-2  bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white  text-center" />
              </div>
              <TbCapture />
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
           <div className=" overflow-hidden flex  ">
           <img src={logo2} alt="" className="h-[90px]" />
           </div>
           <div className="flex items-center gap-[8px] justify-between">
            <CiCirclePlus className="bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white text-[50px] rounded-full"/>
          <p className=" bg-gradient-to-r from-[#06286E] via-[#164Ec0] to-blue-800 text-transparent bg-clip-text font-semibold">Create FlashCard</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
