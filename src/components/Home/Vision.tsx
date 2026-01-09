"use client";

import React, {useRef} from "react";
import visionImage from "../../../public/assets/vision/vision.png";
import subVisionImage from "../../../public/assets/vision/sub_vision.png";
import Image from "next/image";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

const Vision = () => {
    const previousRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const previousMainRef = useRef<HTMLButtonElement>(null);
    const nextMainRef = useRef<HTMLButtonElement>(null);

    const handleTriggerPrevious = () => {
        if (previousRef.current) {
            previousRef.current.click(); // Programmatically trigger the click
        }
        if (previousMainRef.current) {
            previousMainRef.current.click(); // Programmatically trigger the click
        }
    };

    const handleTriggerNext = () => {
        if (nextRef.current) {
            nextRef.current.click(); // Programmatically trigger the click
        }
        if (nextMainRef.current) {
            nextMainRef.current.click(); // Programmatically trigger the click
        }
    };

    return (
        <div className="mb-32 md:mb-64 lg:mb-0 w-full h-screen flex flex-row relative">
            <div className="w-full md:w-[60%] h-[50%] md:h-full">
                <Carousel
                    className="w-full h-[50vh] md:h-[100vh] overflow-hidden"
                    opts={{
                        align: "start",
                        loop: true,
                        watchDrag: false,
                    }}
                >
                    <CarouselContent className="h-full w-full">
                        {Array.from({length: 2}).map((_, index) => (
                            <CarouselItem key={index + 'car'} className="w-full h-[50vh] md:h-[100vh] overflow-hidden">
                                <Image
                                    src={visionImage}
                                    alt="image"
                                    className="w-full h-[50vh] md:h-[100vh] object-cover"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious ref={previousRef} className="hidden"/>
                    <CarouselNext ref={nextRef} className="hidden"/>
                </Carousel>
            </div>
            <div
                className="flex flex-col gap-y-8 md:flex-row absolute top-[20%] md:top-28
                left-[10%] md:left-[30%] lg:left-[45%]">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        watchDrag: false,
                    }}
                    className="w-80 h-[70%]"
                >
                    <CarouselContent>
                        {Array.from({length: 2}).map((_, index) => (
                            <CarouselItem key={index} className="w-80 h-[70%]">
                                <Image
                                    src={subVisionImage}
                                    alt="image"
                                    className=" object-cover"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious ref={previousMainRef} className="hidden"/>
                    <CarouselNext ref={nextMainRef} className="hidden"/>
                </Carousel>
                <div className="pr-10 md:pr-0 md:px-10 flex flex-col justify-center items-center">
                    <div className="text-3xl md:text-5xl font-semibold">Materials for your natural vision.</div>
                    <div className="text-sm md:text-lg mt-12">
                        Realize your architectural and design dreams with materials that bring a natural touch to your
                        creations.
                    </div>
                    <div
                        className="self-start mt-10 text-gray-600 flex flex-row items-center cursor-pointer group
                    hover:text-black">
                    <span className="relative group-hover:after:w-full
                           after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                           after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300">
                        See Materials
                    </span>
                        <BsArrowRight
                            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>

                    <div className="mt-10 self-start flex flex-row gap-x-4">
                        <BsArrowLeft
                            onClick={handleTriggerPrevious}
                            className="text-blue-500 cursor-pointer transition-transform duration-300 text-xl
                        hover:scale-x-150 hover:scale-y-125 hover:text-blue-700"/>
                        <BsArrowRight
                            onClick={handleTriggerNext}
                            className="text-blue-500 cursor-pointer transition-transform duration-300 text-xl
                        hover:scale-x-150 hover:scale-y-125 hover:text-blue-700"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Vision;