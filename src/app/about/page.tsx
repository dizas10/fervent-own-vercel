import {LuHome} from "react-icons/lu";
import ThirdBanner from "@/pages/ThirdBanner";
import React from "react";
import WhyAreWeAbout from "@/components/about/WhyAreWeAbout";
import OurValuesAbout from "@/components/about/OurValuesAbout";
import CodeOfConductAbout from "@/components/about/CodeOfConductAbout";
import OurMilestonesAbout from "@/components/about/OurMileStonesAbout";
import OurFactoryAbout from "@/components/about/OurFactoryAbout";

const page = () => {
    return (
        <>
            <div
                className="relative -top-[110px] bg-[url('/assets/Image.png')] bg-cover bg-center bg-no-repeat
                h-screen z-0">
                <div className=" w-full absolute -bottom-0 flex items-center justify-center mx-auto ">
                    <div className=" w-[1170px] h-[90px] flex flex-col it justify-between mb-10 ">
                        <ul className="w-full flex flex-row items-center gap-6 pl-4 text-white text-xl ">
                            <li className=" pr-4 ">
                                <LuHome size={30}/>
                            </li>
                            <li className=" list-disc pr-4 capitalize ">company</li>
                            <li className=" list-disc capitalize ">about us</li>
                        </ul>
                        <h1 className="text-white text-6xl font-bold ">About us</h1>
                    </div>
                </div>
            </div>
            <WhyAreWeAbout/>
            <OurValuesAbout/>
            <div className='bg-gradient-to-b from-white to-[#EEEDE9]'>
                <CodeOfConductAbout/>
                <OurMilestonesAbout/>
                <OurFactoryAbout/>
            </div>
            <ThirdBanner/>
        </>
    );
};

export default page;
