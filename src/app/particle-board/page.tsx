import React from "react";
import Hero from '../../components/re-usable/Hero'
import ProductRange from "@/components/re-usable/ProductRange";
import ProductLine from "@/components/re-usable/ProductLine";
import ThirdBanner from "@/pages/ThirdBanner";
import CreatedToFits from "@/components/Particle-board/CreatedToFitParticleBoard";
import SmartChoise from "@/components/Particle-board/SmartChoise";
import SmartApplication from "@/components/Particle-board/SmartApplication";
import Sustainability from "@/components/Particle-board/Sustainability";

const page = () => {
    return (
        <div className={`bg-[#EEEDE9]`}>
            <Hero/>
            <div className="h-fit flex flex-col items-center justify-center mt-16">
                <SmartChoise/>
                <SmartApplication/>
                <ProductRange/>
                <Sustainability/>
                <CreatedToFits/>
                <ProductLine/>
            </div>
            <ThirdBanner/>
        </div>
    );
};

export default page;
