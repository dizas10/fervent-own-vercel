"use client"
import React from "react";
import ThirdBanner from "@/pages/ThirdBanner";
import {BsArrowRightShort} from "react-icons/bs";

const Contact = () => {
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
                className=" lg:w-[1170px] ipad:w-[90%] w-full p-5 text-[rgba(0,0,0,0.7)] lg:h-[802px] h-fit bg-[#EEEDE9]
                 flex items-center justify-center rounded ">
                <div className=" lg:w-[1030px] w-full  lg:h-[602px] h-fit flex flex-col items-start justify-between ">
                    <div className="lg:w-[1030px] w-full h-[58px] items-start justify-center   ">
                        <h1 className=" text-4xl font-bold ">
                            Get in <span className=" text-[#00A5E3] ">touch</span>
                        </h1>
                    </div>
                    <div
                        className="lg:w-[1030px] w-full lg:h-[432px] h-fit flex flex-col items-start ">
                        <div
                            className=" w-full h-auto flex ipad:flex-row flex-col gap-6 items-center">
                            <div className={`flex flex-col w-full gap-2`}>
                                <div className=" w-full h-[82px] flex flex-col items-start justify-center ">
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name here" // Enter your name here
                                        className=" w-full h-[50px] p-2 rounded "
                                    />
                                </div>
                                <div className=" w-full h-[82px] flex flex-col items-start justify-center ">
                                    <label htmlFor="name">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Select Subject"
                                        className=" w-full h-[50px] p-2 rounded "
                                    />
                                </div>
                            </div>

                            <div className={`w-full flex flex-col gap-2`}>
                                <div className=" w-full h-[82px] flex flex-col items-start justify-center ">
                                    <label htmlFor="name">Email Address</label>
                                    <input
                                        type="text"
                                        placeholder="Write your email address"
                                        className=" w-full h-[50px] p-2 rounded "
                                    />
                                </div>
                                <div className=" w-full h-[82px] flex flex-col items-start justify-center ">
                                    <label htmlFor="name">Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder="Write your phone number"
                                        className=" w-full h-[50px] p-2 rounded "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-[208px] mt-4 ">
                            <label htmlFor="message">Your message</label>
                            <textarea
                                placeholder="Enter message here"
                                className=" w-full h-[176px] rounded p-2 "
                            />
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
            <ThirdBanner/>
        </div>
    );
};

export default Contact;
