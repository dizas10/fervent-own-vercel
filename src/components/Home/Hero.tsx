import React from "react";

const Hero = () => {
    return (
        <div className="relative -top-[110px] w-full h-[500px]  ">
            <div className="  absolute w-full h-screen bg-[url('/assets/hero/hero.png')]
      bg-cover bg-center bg-no-repeat z-0 flex flex-col items-center justify-center">
                <div
                    className=" absolute bottom-0 left-[5rem] mx-auto w-[45rem] h-[119px] flex flex-col items-center justify-center mb-20 ">
                    <h1 className="text-white text-7xl text-start font-bold mb-20 capitalize">
                        A trusted place for your multi-board needs.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
