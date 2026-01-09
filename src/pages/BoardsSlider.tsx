"use client";
import React, {useEffect, useState} from "react";
import {BsArrowRight} from "react-icons/bs";

const BoardsSliderCopy = () => {
    const images = [
        "/assets/home/wood.png",
        "/assets/home/wood.png",
        "/assets/home/wood.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(1); // Center image index

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div className='w-full h-auto my-20'>
            <div className='pt-20 text-5xl lg:text-7xl px-8 lg:px-36 text-center font-semibold'>
                Our Products to Meet Your <span className='text-blue-500'>Imaginations</span>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[800px]'>
                <div className="relative flex flex-col items-start gap-6 w-full min-h-[800px]">
                    <div
                        className="-ml-12 lg:ml-32 w-[500px] h-[500px] border-4 border-blue-300 rounded-full z-0 opacity-70 top-[20%] absolute"></div>
                    <div
                        className="-ml-24 lg:ml-20 w-[600px] h-[600px] border-4 border-blue-300 rounded-full z-0 opacity-70 top-[13%] absolute"></div>

                    {images.map((image, index) => {
                        const isActive = index === currentIndex; // Image in the center
                        const isTop = index === (currentIndex - 1 + images.length) % images.length; // Image at the top
                        const isBottom = index === (currentIndex + 1) % images.length; // Image at the bottom

                        return (
                            <img
                                key={index}
                                src={image}
                                alt={`Carousel ${index}`}
                                className={`absolute transition-all duration-500 ease-in-out ${
                                    isActive
                                        ? "top-[52%] transform translate-y-[-50%] z-20 w-[350px] lg:w-[600px] h-[300px]"
                                        : isTop
                                            ? "top-[15%] -ml-20 transform translate-y-0 -rotate-[30deg] z-10 w-[300px] lg:w-[400px] h-[200px]"
                                            : isBottom
                                                ? "top-[63%] -ml-20 transform translate-y-0 rotate-[30deg] z-10 w-[300px] lg:w-[400px] h-[200px]"
                                                : "opacity-0"
                                }`}
                            />
                        );
                    })}
                </div>
                <div className='flex flex-col gap-x-2 justify-center mt-12 lg:mt-0 px-8 lg:px-24'>
                    <div className='text-blue-400 font-bold capitalize text-5xl'>
                        Fervent
                    </div>
                    <div className='font-bold capitalize text-8xl'>
                        MDF
                    </div>
                    <div className='mt-12 text-gray-400'>
                        Smooth, Versatile, Affordable
                    </div>
                    <div
                        className="self-start mt-10 text-gray-600 flex flex-row items-center cursor-pointer group
                    hover:text-black">
                    <span className="relative group-hover:after:w-full
                           after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                           after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300">
                        Explore Products
                    </span>
                        <BsArrowRight
                            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardsSliderCopy;
