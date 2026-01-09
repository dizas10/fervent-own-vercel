import Hero from '../../components/board-of-directors/Hero'
import Chairman from "@/components/board-of-directors/Charman";
import Directors from "@/components/board-of-directors/Directors";
import ThirdBanner from "@/pages/ThirdBanner";
import React from "react";

const page = () => {
    return (
        <div className={`flex flex-col gap-10 bg-[#EEEDE9] `}>
            <Hero/>
            <div className='lg:px-32'>
                <Chairman/>
                <Directors/>
            </div>
            <ThirdBanner/>
        </div>
    );
};

export default page;