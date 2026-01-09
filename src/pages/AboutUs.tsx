"use client"
import React from "react";

// import ArrowRight from '../../public/assets/arrow-right.png';
import Image from "next/image";

import background from "../../public/assets/about/right.png";
import {BsArrowRightShort} from "react-icons/bs";

const AboutUs = () => {
    const [isHovered, setIsHovered] = React.useState(false)

    function MouseEnter() {
        setIsHovered(true)
    }

    function MouseLeave() {
        setIsHovered(false)
    }

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-16 justify-between">
            {/*  info*/}
            <div
                className={`lg:w-1/2 w-full lg:py-10 px-10 flex-col flex justify-center gap-14 text-[rgba(0,0,0,0.7)]`}>
                <p className={`text-4xl lg:text-7xl font-bold`}>Crafting the Future of Manufacturing</p>

                <p className="opacity-60 leading-7 tracking-wide">
                    BOARD Multiboard Industry Ltd. was founded on September 29, 2021. It
                    is a subsidiary of BOARD Group. The company was established by
                    Someone, a top business pioneer in Bangladesh. After achieving great
                    success in the xyz sector, he is now focusing on manufacturing
                    various types of boards.
                </p>

                {/*    button*/}
                <button
                    className={`flex flex-col w-fit
                            ${isHovered ? "translate-x-0 transition-all duration-500 ease-in-out"
                        :
                        "-translate-x-5 transition-all duration-500 ease-in-out"}
                            `}
                    onMouseEnter={MouseEnter}
                    onMouseLeave={MouseLeave}
                >
                    <span className="flex items-center">
                          <BsArrowRightShort className={`
                                ${isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out "
                              :
                              "-translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out "}
                                `}/>
                        Know More
                          <BsArrowRightShort className={`
                                ${!isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out"
                              :
                              "translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out"}
                                `}/>
                      </span>
                    <span className={`w-full h-[1px] bg-gray-500 mt-1 
                                ${!isHovered ?
                        "opacity-100 transition-all duration-500 ease-in-out delay-500"
                        :
                        "opacity-0 transition-all duration-500 ease-in-out"}
                                `
                    }></span>
                </button>
            </div>
            {/*  image*/
            }
            <div className={`lg:w-[50%] w-full flex flex-col-reverse lg:flex-row`}>
                <div
                    className='h-full px-10 mt-4 lg:mt-0 lg:px-0 flex lg:justify-center lg:text-8xl text-4xl gradient-text font-bold lg:[writing-mode:vertical-rl]
                    lg:[text-orientation:mixed] lg:transform lg:rotate-180'>
                    About Us
                </div>
                <Image
                    src={background}
                    className="flex-grow w-full ipad:h-[50rem]"
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
        ;
};

export default AboutUs;
