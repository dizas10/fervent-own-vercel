import React from "react";
import mission_image from "@/assets/mission-group.png";
import Image from "next/image";

const WhyAreWeMission = () => {
    return (
        <div className="pt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 lg:px-32">
            <div className="flex justify-center text-center">
                <Image
                    src={mission_image}
                    alt="mission image"
                    priority
                    className="h-full"
                />
            </div>
            <div className=" w-full lg:px-10 h-full flex flex-col items-start justify-center ">
                <h1 className="text-[#002331] lg:text-6xl text-4xl font-bold">
                    Why are we <br/>
                    <span className=" text-[#00A5E3] ">different?</span>
                </h1>
                <p className=" mt-6 ">
                    MDF has been the front-runner in applying innovation at work. This
                    simple philosophy has been the cornerstone of all our processes and
                    technologies. It has led us to design and deliver contemporary
                    lifestyle statements that have become synonymous with modern living.
                </p>
            </div>
        </div>
    );
};

export default WhyAreWeMission;
