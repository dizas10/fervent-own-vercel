import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative -top-[3rem] w-full h-[calc(100vh-110px)]">
            <div
                className=" absolute w-full h-screen bg-no-repeat z-0 flex lg:flex-row flex-col items-center justify-center">

                {/*    banner div*/}
                <div className={`lg:w-[70%] w-full bg-[url('/assets/hdf/banner.png')] bg-cover
                bg-center h-full relative`}>

                    {/*banner text*/}
                    <div className={`absolute bottom-0 bg-hero-body h-full w-full`}>
                        <p className={`absolute ipad:bottom-[20%] bottom-[10%] left-14 lg:leading-[5rem] ipad:leading-[4rem] 
                        text-white lg:text-6xl ipad:text-5xl text-3xl w-[60%] font-bold`}>
                            Elevate Your Spaces with Exceptional <span
                            className={`text-[#5e73e1]`}>Durability </span> and Style
                        </p>
                    </div>
                </div>


                {/*    sub-banner div*/}
                <div className={`lg:w-[30%] w-full flex flex-col h-full`}>

                    {/*    banner-1*/}
                    <div className={`bg-[url('/assets/hdf/product.png')] bg-cover
                bg-center h-1/2 relative`}>

                        {/*title*/}
                        <p className={`absolute lg:top-16 ipad:top-10 top-10 left-5 text-white`}>Arvadonna Chestnut</p>
                    </div>

                    {/*    banner-2 (download)*/}
                    <div className={`h-1/2 bg-sub-hero relative`}>

                        {/*download-icon*/}
                        <div
                            className={`absolute top-5 left-5 h-10 w-10 border flex items-center justify-center rounded-full cursor-pointer`}>
                            <Image
                                alt={`download-icon`}
                                src={`/assets/hdf/fi_7532231.png`}
                                width={20}
                                height={20}
                            />
                        </div>

                        {/*    catalog text*/}
                        <div className={`absolute bottom-5 left-5 flex flex-col gap-2`}>
                            <p className={`text-xs text-[rgba(255,255,255,0.5)]`}>HDF Flooring</p>
                            <p className={`text-xl text-[rgba(255,255,255,0.9)]`}>Download Catalog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
