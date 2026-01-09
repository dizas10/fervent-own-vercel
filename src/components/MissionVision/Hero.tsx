import React from "react";
import {LuHome} from "react-icons/lu";

const Hero = () => {
    return (
        <div className=" relative -top-[110px] w-full h-[calc(100vh-110px)]  ">
            <div
                className="  absolute w-full h-screen  bg-[url('/assets/mission-Image.png')] bg-cover bg-center bg-no-repeat z-0 flex flex-col items-center justify-center ">
                <div className=" absolute lg:bottom-0 ipad:bottom-10 bottom-0 mx-auto lg:w-[1170px] ipad:w-[30rem] h-[119px] flex flex-col
        lg:justify-between justify-evenly mb-10 ">
                    <ul className="w-full flex flex-row items-center gap-6 text-white lg:text-xl text-lg">
                        <li className=" pr-4 ">
                            <LuHome size={30}/>
                        </li>
                        <li className=" list-disc pr-4 capitalize ">company</li>
                        <li className=" list-disc capitalize ">Mission & Vision</li>
                    </ul>
                    <h1 className="text-white lg:text-6xl ipad:text-5xl text-4xl font-bold ">Mission & Vision</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
