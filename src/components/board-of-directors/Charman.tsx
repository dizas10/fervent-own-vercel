"use client"
import Image from "next/image";
import {BsArrowRightShort} from "react-icons/bs";
import React from "react";

const Chairman = () => {
    const [isHovered, setIsHoverd] = React.useState(false)

    function MouseEnter() {
        setIsHoverd(true)
    }

    function MouseLeave() {
        setIsHoverd(false)
    }

    return (
        <div className={`flex lg:flex-row flex-col gap-5 p-10 relative`}>
            {/* Chairman message */}
            <div className={`lg:w-1/2 w-full flex flex-col gap-10 text-[rgba(0,0,0,0.7)]`}>
                <div className={`flex flex-col gap-2`}>
                    <p className={`text-4xl uppercase font-bold`}>S. M. Mahbubul Alam</p>
                    <span className={`text-[blue]`}>Chairman</span>
                </div>

                {/*message*/}
                <div className={`text-justify`}>
                    <span>
                        S. M. Mahbubul Alam is the visionary Chairman of Fervent Multiboard Industries,
                    with over 30 years of experience in the manufacturing industry. Under his
                    leadership, the company has become a leader in innovative, eco-friendly
                    building materials. <br className={`mb-5`}/>
                    Committed to excellence and sustainability, Mr. Alam has spearheaded numerous
                    initiatives that have positioned the company as a pioneer in its field.
                    His dedication to quality and customer satisfaction continues to drive Fervent
                    Multiboard Industries&#39; success.
                    </span>
                </div>

                {/*more button*/}
                <button
                    className={`flex flex-col w-fit
                            ${isHovered ? "translate-x-0 transition-all duration-500 ease-in-out"
                        :
                        "-translate-x-5 transition-all duration-500 ease-in-out"}
                            `}
                    onMouseEnter={MouseEnter}
                    onMouseLeave={MouseLeave}
                >
              <span className="flex gap-2 items-center">
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
                    <span className={`w-full h-[1px] bg-[blue] mt-1 
                            ${!isHovered ?
                        "opacity-100 transition-all duration-500 ease-in-out delay-500"
                        :
                        "opacity-0 transition-all duration-500 ease-in-out"}
                            `
                    }></span>
                </button>


                {/*    icon image*/}
                <div className={` w-full flex lg:justify-end`}>
                    <Image
                        src={`/assets/boardofdirectors/Chairman Image.png`}
                        width={150}
                        height={150}
                        alt={`chairman_image_icon`}
                        className={`z-10`}
                    />
                </div>
            </div>


            {/* Image Section */}
            <div className={`flex justify-center items-center lg:w-1/2 w-full`}>
                <Image
                    src={`/assets/boardofdirectors/chairman.jpeg`}
                    width={600}
                    height={150}
                    alt={`chairman_image`}
                    className={`z-10 h-[20rem] w-[80rem]`}
                />
            </div>

            {/*stroke message*/}
            <div
                className="lg:text-[6rem] text-6xl text-[#EEEDE9] uppercase font-bold flex w-fit
                    text-stroke-black text-stroke-thin tracking-[0.06em] absolute lg:bottom-[-2rem] left-0 bottom-[32%]">
                Chairman Message
            </div>
        </div>
    );
};

export default Chairman;