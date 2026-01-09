import React from "react";

const Features = () => {
    // feature.png
    return (
        <div className="bg-ctm-yellow bg-[#E2DED6]">
            <div className="pt-[200px] px-8 lg:px-36">
                <div className="relative">
                    <div className="top-[-100px] lg:top-[-36px] right-0 left-0 absolute">
                        <div className="font-medium text-2xl lg:text-5xl text-ctm-dark leading-8">
                            Bringing nature{" "}
                        </div>
                        <h2 className="mt-4 lg:mt-16 text-ctm-sky font-semibold text-4xl lg:text-7xl">Indoors</h2>
                    </div>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                >
                    <source src="/videos/istock_443046.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className=" h-[100px] w-full bg-gradient-to-t from-[white] to-[#E2DED6] "></div>
        </div>
    );
};

export default Features;
