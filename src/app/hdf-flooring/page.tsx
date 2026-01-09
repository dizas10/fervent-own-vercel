import React from "react";
import Hero from '../../components/re-usable/Hero'
import ThirdBanner from "@/pages/ThirdBanner";
import ProductRange from "@/components/re-usable/ProductRange";
import ProductLine from "@/components/re-usable/ProductLine";
import VisualRoom from "@/components/HDF Flooring/VisualRoom";
import WhyChooseUs from "@/components/HDF Flooring/WhyChooseUs";
import VisionBecomereality from "@/components/HDF Flooring/VisionBecomeReality";
import LuxuryElegant from "@/components/HDF Flooring/LuxuryElegant";
import EfortlessElegence from "@/components/HDF Flooring/EfortlessElegence";

const page = () => {
    return (
        <div>
            <Hero/>
            <div className="bg-[#EEEDE9] h-fit mt-16 flex flex-col items-center justify-center">
                <EfortlessElegence/>
                <VisionBecomereality/>
                <ProductRange/>
                <LuxuryElegant/>
                <VisualRoom/>
                <WhyChooseUs/>
                <ProductLine/>
            </div>
            <ThirdBanner/>
        </div>
    );
};

export default page;
