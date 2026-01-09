import React from "react";
import Hero from '../../components/MDF/Hero'
import ProductRange from "@/components/re-usable/ProductRange";
import ProductLine from "@/components/re-usable/ProductLine";
import ThirdBanner from "@/pages/ThirdBanner";
import MDFMedium from "@/components/MDF/MDFMedium";
import ProductCategory from "@/components/MDF/ProductCategory";
import CreatedToFits from "@/components/MDF/CreatedToFitMDF";

const page = () => {
    return (
        <div>
            <Hero/>
            <div className="bg-[#EEEDE9] h-fit flex flex-col items-center justify-center space-y-10">
                <MDFMedium/>
                <ProductCategory/>
                <ProductRange/>
                <CreatedToFits/>
                <ProductLine/>
            </div>
            <ThirdBanner/>
        </div>
    );
};

export default page;
