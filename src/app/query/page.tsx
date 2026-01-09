import Query from "@/components/query/Query";
import Hero from "@/components/query/Hero";
import ThirdBanner from "@/pages/ThirdBanner";
import React from "react";

const page = () => {
    return (
        <div>
            <Hero/>
            <div className=" h-[100px] w-full bg-gradient-to-t from-[#FFFFFF] to-[#EEEDE9] "></div>
            <Query/>
            <ThirdBanner/>
        </div>
    );
};

export default page;
