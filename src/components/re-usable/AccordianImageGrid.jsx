"use client";
import React from "react";
import {CirclePlus, CircleMinus} from "lucide-react";
import Image from "next/image";

const AccordianImageGrid = ({data}) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-10 w-full h-fit py-5 px-5 max-w-[90rem] relative">
            {/* Accordion and Image Section */}
            <div className="flex flex-col lg:flex-row gap-5 z-20">
                {/* Accordion Items */}
                <div className="w-full">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="border-b-2 border-b-[rgba(0,0,0,0.3)]"
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-lg font-semibold text-left bg-inherit p-4 z-10 focus:outline-none flex justify-between items-center"
                            >
                                <span className={`text-[rgba(0,0,0,0.3)] font-light`}>{item.title}</span>
                                {openIndex === index ? (
                                    <CircleMinus
                                        className="hover:bg-[rgba(0,0,0,0.5)] cursor-pointer rounded-full transition-all duration-200 ease-in-out"
                                    />
                                ) : (
                                    <CirclePlus
                                        className="hover:bg-[rgba(0,0,0,0.5)] cursor-pointer rounded-full transition-all duration-200 ease-in-out"
                                    />
                                )}
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`${
                                    openIndex === index
                                        ? "ipad:max-h-[10rem] max-h-[11rem] opacity-100 p-4"
                                        : "max-h-0 opacity-0 overflow-hidden"
                                } transition-all duration-500 ease-in-out flex flex-wrap gap-3`}
                            >
                                {[...Array(3)].map((_, imgIndex) => (
                                    <div key={imgIndex}>
                                        <Image
                                            src={`/assets/hdf/MDF.png`}
                                            alt="Product Image"
                                            width={300}
                                            height={300}
                                            className="lg:w-28 w-16 lg:h-28 h-20"
                                        />

                                        {item.fileName && (
                                            <p>{item.fileName}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccordianImageGrid;
