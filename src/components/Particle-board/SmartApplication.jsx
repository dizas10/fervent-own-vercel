"use client"
import Image from "next/image";
import React from "react";
import grid1 from "../../../public/assets/particle-board/smartApplication/1.png";
import grid2 from '../../../public/assets/particle-board/smartApplication/2.png';
import grid3 from '../../../public/assets/particle-board/smartApplication/3.png';

const SmartApplication = () => {
  const [hovered, setHovered] = React.useState({
    grid1: false,
    grid2: false,
    grid3: false,
  });

  function handleMouseEnter(image) {
    setHovered((prev) => ({...prev, [image]: true}));
  }

  function handleMouseLeave(image) {
    setHovered((prev) => ({...prev, [image]: false}));
  }

  return (
    <div className="bg-ctm-yellow-dark lg:p-100 pt-20 p-0  container-bg">
      <div className="flex lg:flex-row flex-col gap-20 justify-between items-center">

        {/* text left */}
        <div className="relative flex items-center text-center">
                    <span
                      className="absolute md:w-[1000px] ipad:w-[20rem] w-[20rem] lg:text-8xl
                        text-5xl text-black text-top transform  lg:-translate-x-[20%] -translate-x-[50%] lg:-rotate-90">
                        Smart <br/>
                        <span className={`text-[#5e73e1]`}>Application</span>
                    </span>
        </div>
        {/* Right Image Section */}
        <div className="lg:justify-between items-center lg:gap-[100px] ipad:gap-5 gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:w-full ipad:w-[40rem] w-[20rem] flex
                flex-wrap justify-center lg:p-20">
          {/* Image 1 */}
          <div
            className="relative lg:col-start-2 ipad:col-start-3 lg:row-start-1 rounded-md overflow-hidden"
            onMouseEnter={() => handleMouseEnter("grid1")}
            onMouseLeave={() => handleMouseLeave("grid1")}
          >
            <Image
              src={grid1}
              alt="Residential"
              width="370"
              height="450"
              className="rounded-md w-[370px] ipad:w-[550px] h-[350px] border border-[rgba(0,0,0,0.3)]"
            />
            {/* Overlay */}
            <div
              className={`absolute bg-[rgba(0,0,0,0.2)]   
                            ${hovered.grid1 ? "top-0 right-0 left-0 bottom-0 opacity-100 h-full w-full rounded-md transition-all duration-[200] ease-in-out" :
                "opacity-0 top-[-1rem] h-full w-full rounded-md transition-all duration-[200] ease-in-out"}`}
            >
              <p className={`px-4 py-5 text-white text-xs leading-5 tracking-wide font-light`}>
                Perfect for furniture, cabinets and shelving</p>
            </div>
            <div className="bottom-4 left-4 absolute  p-2 rounded-md text-white">
              Residential
            </div>
          </div>

          {/* Image 2 */}
          <div
            className="relative lg:col-start-2 ipad:col-start-2 lg:row-start-2 ipad:row-start-1 rounded-md overflow-hidden"
            onMouseEnter={() => handleMouseEnter("grid3")}
            onMouseLeave={() => handleMouseLeave("grid3")}
          >
            <Image
              src={grid3}
              alt="Commercial"
              width="370"
              height="450"
              className="rounded-md w-[370px] ipad:w-[550px] h-[350px] border border-[rgba(0,0,0,0.3)]"
            />
            {/*overlay*/}
            <div
              className={`absolute bg-[rgba(0,0,0,0.2)]   
                            ${hovered.grid3 ? "top-0 right-0 left-0 bottom-0 opacity-100 h-full w-full rounded-md transition-all duration-[200] ease-in-out" :
                "opacity-0 top-[-1rem] h-full w-full rounded-md transition-all duration-[200] ease-in-out"}`}
            >
              <p className={`px-4 py-5 text-white text-xs leading-5 tracking-wide font-light`}>
                Great for hobbies and enthusiast </p>
            </div>
            <div className="bottom-4 left-4 absolute p-2 rounded-md text-white">
              Commercial
            </div>
          </div>

          {/* Image 3 */}
          <div
            className="relative col-start-3 row-span-2 overflow-hidden"
            onMouseEnter={() => handleMouseEnter("grid2")}
            onMouseLeave={() => handleMouseLeave("grid2")}
          >
            <Image
              src={grid2}
              alt="Office"
              width="370"
              height="450"
              className="rounded-md w-[370px] ipad:w-[550px] h-[350px] border border-[rgba(0,0,0,0.3)]"
            />
            {/*overlay*/}
            <div
              className={`absolute bg-[rgba(0,0,0,0.2)]   
                            ${hovered.grid2 ? "top-0 right-0 left-0 bottom-0 opacity-100 h-full w-full rounded-md transition-all duration-[200] ease-in-out" :
                "opacity-0 top-[-1rem] h-full w-full rounded-md transition-all duration-[200] ease-in-out"}`}
            >
              <p className={`px-4 py-5 text-white text-xs leading-5 tracking-wide font-light`}>
                suitable for office furniture , retail fixture and more
              </p>
            </div>
            <div className="bottom-4 left-4 absolute  p-2 rounded-md text-white">
              Office
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartApplication;
