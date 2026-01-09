import React from "react";
import Hero from '../../components/re-usable/Hero'
import ProductRange from "@/components/re-usable/ProductRange";
import ProductLine from "@/components/re-usable/ProductLine";
import ThirdBanner from "@/pages/ThirdBanner";
import DesignImpressComposition from "@/components/HPL/DesignImpressComposition";
import WhyHPLBest from "@/components/HPL/WhyHPLBest";
import GreenFuture from "@/components/HPL/GreenFuture";
import CreatedToFit from "@/components/HPL/CreatedToFit";

const page = () => {
    return (
        <div>
            <Hero/>
            <div className="bg-[#EEEDE9] h-fit mt-16 flex flex-col items-center justify-center">
                <DesignImpressComposition/>
                <WhyHPLBest/>
                <ProductRange/>
                <GreenFuture/>
                <CreatedToFit/>
                <ProductLine/>
            </div>
            <ThirdBanner/>
        </div>
    );
};

export default page;
