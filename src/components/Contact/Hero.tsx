import React from "react";
import {LuHome} from "react-icons/lu";

const Hero = () => {
    return (
        <div className=" relative -top-[110px] w-full h-[calc(100vh-110px)]  ">
            <div
                className=" absolute w-full h-screen bg-[url('/assets/Contact.png')] bg-cover bg-center bg-no-repeat z-0 flex flex-col items-center justify-center ">
                <div
                    className=" absolute bottom-0 mx-auto lg:w-[1170px] w-full h-[119px] flex flex-col justify-between mb-10 ml-5 ">
                    <ul className="w-full flex flex-row items-center ipad:gap-6 gap-3 text-white ipad:text-xl text-lg ">
                        <li className=" pr-4 ">
                            <LuHome size={30}/>
                        </li>
                        <li className=" list-disc pr-4 capitalize ">Contact</li>
                        <li className=" list-disc capitalize ">Contact Us</li>
                    </ul>
                    <h1 className="text-white ipad:text-6xl text-5xl font-bold ">Contact Us</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
