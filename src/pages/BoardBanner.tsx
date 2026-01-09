"use client"
import Link from "next/link";
import React from "react";
import {BsArrowRightShort} from "react-icons/bs";
import Container from '../../public/assets/boardbanner/bg.png'
import Image from "next/image";

const BoardBanner = () => {
    const [isHovered, setIsHoverd] = React.useState(false)

    function MouseEnter() {
        setIsHoverd(true)
    }

    function MouseLeave() {
        setIsHoverd(false)
    }

    return (
        <div className="relative h-[800px]">
            <div className="z-10 absolute inset-0 bg-board-banner bg-cover bg-no-repeat"></div>
            <div className="z-20 absolute inset-0 bg-overlay-black opacity-25 w-full h-full"></div>

            {/* news slider*/}
            <div
                className="top-[150px] left-1/2 z-30 absolute w-full text-center text-white transform -translate-x-1/2">
                <p className="mb-5 text-[14px] leading-[100%]">
                    Explore the new additions
                </p>
                <h1 className="mb-10 lg:text-header ipad:text-5xl text-4xl font-bold">Let&apos;s Build with BOARD!</h1>
                <div
                    className="inline-flex flex-col gap-[10px]"
                    onMouseEnter={MouseEnter}
                    onMouseLeave={MouseLeave}
                >
                    <Link
                        href="/"
                        className={`inline-flex items-center gap-[10px] opacity-75 text-xl leading-5
                        ${isHovered ? "translate-x-0 transition-all duration-500 ease-in-out"
                            :
                            "-translate-x-5 transition-all duration-500 ease-in-out"}
                        `}
                    >
                        <BsArrowRightShort className={`
                        ${isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out"
                            :
                            "-translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out"}
                        `}/>
                        <span>Explore Products</span>
                        <BsArrowRightShort className={`
                        ${!isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out"
                                :
                                "translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out"}
                        `}
                        />
                    </Link>
                    <div className={`relative`}>
                        <hr className="bottom-line bg-white absolute"/>
                        <hr className={`bottom-line bg-white absolute h-[0.1rem]
                        ${isHovered ? "max-w-full transition-all duration-500 ease-in-out"
                            :
                            "max-w-0 transition-all duration-500 ease-in-out"}
                        `}/>
                    </div>
                </div>
            </div>
            <div className="lg:-bottom-[70px] ipad:-bottom-[7.5rem] -bottom-[9rem] z-50 absolute w-full text-center">
        <span className=" opacity-60 backgdrop-filter-10 font-bold lg:text-[300px] ipad:text-[10rem] text-[4.6rem]
        text-[rgba(255,255,255,0.8)] leading-[363px] lg:tracking-wide tracking-[0.1em]">
          FERVENT
        </span>
            </div>

            {/* Background Image*/}
            <Image src={Container} alt={`container`}
                   className={`absolute h-full w-full top-0 bottom-0 right-0 left-0`}/>
        </div>
    );
};

export default BoardBanner;
