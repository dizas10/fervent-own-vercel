import React from "react";
import MultiBoardSlider from "@/components/Home/MultiBoardSlider";

const SliderProduct = () => {
    return (
        <>
            <div className="pt-100 pb-[93px] container-bg">
                <div
                    className="flex lg:flex-row flex-col justify-between items-center lg:gap-[265px] ipad:gap-10 gap-5">
                    <div className="lg:w-[670px] ipad:w-[25rem] w-[20rem]">
                        <h2 className="text-ctm-font-black lg:text-header ipad:text-6xl text-5xl font-bold">
                            Your <span className="text-ctm-sky text-blue-500">dream</span> becomes true
                        </h2>
                    </div>
                    <span className="lg:w-[380px] ipad:w-[30rem] w-[20rem] text-justify lg:text-lg text-sm ">
            As a top multi-board provider we deliver quality furniture and
            boards that exceed expectations. Don&apos;t just take our word for
            it, try it yourself.
          </span>
                </div>
            </div>


            <div className=" w-full h-[60vh] flex items-center justify-center lg:mt-48 ipad:mt-32 mt-48">
                <MultiBoardSlider/>
            </div>
            <div className="relative bg-gradient-to-t from-ctm-yellow-dark to-white h-[200px]"/>
        </>
    );
};

export default SliderProduct;
