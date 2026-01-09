"use client"
import Image from "next/image";
import React from "react";
import grid1 from "../../public/assets/gridstories/1.png";
import grid2 from '../../public/assets/gridstories/2.png';
import grid3 from '../../public/assets/gridstories/3.png';

const GridStories = () => {
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
    <div className="bg-ctm-yellow-dark pt-100 pb-[488px] container-bg">
      <div className="flex lg:flex-row flex-col gap-28 justify-between items-center">
        {/* text left */}
        <div className="relative flex items-center text-center">
                    <span
                      className="absolute md:w-[1000px] ipad:w-[20rem] w-[20rem] lg:text-8xl
                        text-5xl text-black text-top transform  lg:-translate-x-[35%] -translate-x-[50%] lg:-rotate-90">
                        Every fiber holds <br/>
                        Untold stories
                    </span>
        </div>
        {/* Right Image Section */}
        <div className="lg:justify-between items-center lg:gap-[100px] ipad:gap-5 gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:w-full ipad:w-[40rem] w-[20rem] flex
                flex-wrap justify-center">
          {/* Image 1 */}
          <div
            className="relative lg:col-start-2 ipad:col-start-3 lg:row-start-1 rounded-md overflow-hidden"
            onMouseEnter={() => handleMouseEnter("grid1")}
            onMouseLeave={() => handleMouseLeave("grid1")}
          >
            <Image
              src={grid1}
              alt="Superior Durability"
              width="370"
              height="450"
              className="rounded-md w-[370px] ipad:w-[550px] h-[450px]"
            />
            {/* Overlay */}
            <div
              className={`absolute bg-[rgba(0,0,0,0.5)]   
                            ${hovered.grid1 ? "top-0 right-0 left-0 bottom-0 opacity-100 h-full w-full rounded-md transition-all duration-[200] ease-in-out" :
                "opacity-0 top-[-1rem] h-full w-full rounded-md transition-all duration-[200] ease-in-out"}`}
            >
              <p className={`px-4 py-5 text-white text-xs leading-5 tracking-wide font-light`}>Enjoy a
                long-lasting performance.
                Our boardsare designed to withstand everyday wear and tear</p>
            </div>
            <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-2 rounded-md text-white">
              Superior Durability
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
              alt="Moisture Resistance"
              width="370"
              height="450"
              className="rounded-md w-[370px] ipad:w-[550px] h-[450px]"
            />
            {/*overlay*/}
            <div
              className={`absolute bg-[rgba(0,0,0,0.5)]   
                            ${hovered.grid3 ? "top-0 right-0 left-0 bottom-0 opacity-100 h-full w-full rounded-md transition-all duration-[200] ease-in-out" :
                "opacity-0 top-[-1rem] h-full w-full rounded-md transition-all duration-[200] ease-in-out"}`}
            >
              <p className={`px-4 py-5 text-white text-xs leading-5 tracking-wide font-light`}>Enjoy a
                long-lasting performance.
                Our boardsare designed to withstand everyday wear and tear</p>
            </div>
            <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-2 rounded-md text-white">
              Moisture Resistance
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
              alt="Elegant Finishes"
              width="370"
              height="450"
              className="rounded-md w-[370px] ipad:w-[550px] h-[450px]"
            />
            {/*overlay*/}
            <div
              className={`absolute bg-[rgba(0,0,0,0.5)]   
                            ${hovered.grid2 ? "top-0 right-0 left-0 bottom-0 opacity-100 h-full w-full rounded-md transition-all duration-[200] ease-in-out" :
                "opacity-0 top-[-1rem] h-full w-full rounded-md transition-all duration-[200] ease-in-out"}`}
            >
              <p className={`px-4 py-5 text-white text-xs leading-5 tracking-wide font-light`}>Enjoy a
                long-lasting performance.
                Our boardsare designed to withstand everyday wear and tear</p>
            </div>
            <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-2 rounded-md text-white">
              Elegant Finishes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridStories;
