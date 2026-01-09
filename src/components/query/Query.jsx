"use client"
import React from "react";
import {BsArrowRightShort} from "react-icons/bs";
import LabelTextField from "@/components/re-usable/LabelTextField";

const Query = () => {
  const [isHovered, setIsHoverd] = React.useState(false)

  function MouseEnter() {
    setIsHoverd(true)
  }

  function MouseLeave() {
    setIsHoverd(false)
  }

  return (
    <div className=" w-full h-fit flex flex-col items-center justify-center lg:mt-0 mt-36 ">
      <div
        className=" lg:w-[1170px] ipad:w-[90%] w-full p-5 text-[rgba(0,0,0,0.7)] bg-[#EEEDE9]
                 flex items-center justify-center rounded py-20">
        <div className=" lg:w-[1030px] w-full flex flex-col items-start justify-between ">
          <h1 className="mb-10 text-4xl font-bold ">
            Product <span className=" text-[#00A5E3] ">information</span>
          </h1>
          <div
            className="lg:w-[1030px] w-full h-fit flex flex-col items-start gap-y-5">

            <LabelTextField label='Product Name' placeholder='Choose your product'/>

            <div
              className="w-full h-auto grid grid-cols-2 gap-6 ">
              <LabelTextField label='Size' placeholder='Select product size'/>
              <LabelTextField label='Quantity' placeholder='Enter Pcs.'/>
            </div>

            <div className="mt-10 lg:w-[1030px] w-full h-[58px] items-start justify-center   ">
              <h1 className=" text-4xl font-bold ">
                Personal <span className=" text-[#00A5E3] ">information</span>
              </h1>
            </div>

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LabelTextField label='Business Name' placeholder='Write your business name'/>
              <LabelTextField label='Full Name' placeholder='Write your name'/>
              <LabelTextField label='Email Address' placeholder='Write your email address'/>
              <LabelTextField label='Phone Number' placeholder='Write your phone number'/>
              <LabelTextField className='lg:col-span-2' label='Address' placeholder='Write your full address'/>
              <LabelTextField label='Police Station' placeholder='Write your police station'/>
              <LabelTextField label='Select District' placeholder='Select your district'/>
              <LabelTextField className='lg:col-span-2' label='Message'
                              placeholder='Write your message'>
                <textarea className='w-full min-h-[176px] p-2 rounded' placeholder='Write your message'/>
              </LabelTextField>
            </div>

          </div>
          <div className={`mt-5`}>
            <button
              className={`flex flex-col
                            ${isHovered ? "translate-x-0 transition-all duration-500 ease-in-out"
                :
                "-translate-x-5 transition-all duration-500 ease-in-out"}
                            `}
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            >
              <span className="flex items-center">
                  <BsArrowRightShort className={`
                        ${isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out "
                    :
                    "-translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out "}
                        `}/>
                Submit Message
                  <BsArrowRightShort className={`
                        ${!isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out"
                    :
                    "translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out"}
                        `}/>
              </span>
              <span className={`w-full h-[1px] bg-[blue] mt-1 
                            ${!isHovered ?
                "opacity-100 transition-all duration-500 ease-in-out delay-500"
                :
                "opacity-0 transition-all duration-500 ease-in-out"}
                            `
              }></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
