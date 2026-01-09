import Hero from "@/components/MissionVision/Hero";
import Mission from "@/components/MissionVision/Mission";
import React from "react";
import ThirdBanner from "@/pages/ThirdBanner";
import WhyAreWeMission from "@/components/MissionVision/WhyAreWeMission";

const page = () => {
    return (
        <div>
            <Hero/>
            <div className="bg-[#EEEDE9]">
                <WhyAreWeMission/>
                <Mission/>
            </div>
            <ThirdBanner/>
        </div>
    );
};

export default page;
