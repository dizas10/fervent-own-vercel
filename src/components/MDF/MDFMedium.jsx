"use client";
import React from "react";
import {CirclePlus, CircleMinus} from "lucide-react";
import Image from "next/image";

const menuItems = [
    {
        title: "Eco-Friendly Production",
        content:
            "At Fervent Muliboard Industries Ltd, we are committed to producing Medium Density Fiberboard (MDF) that not only meets the highest standards of quality but also respects our planet. Our MDF is crafted from wood fibers sourced from sustainably managed forests, ensuring that each panel contributes to the preservation of natural resources.",
    },
    {
        title: "Renewable Resources",
        content:
            "At Fervent Muliboard Industries Ltd, we are committed to producing Medium Density Fiberboard (MDF) that not only meets the highest standards of quality but also respects our planet. Our MDF is crafted from wood fibers sourced from sustainably managed forests, ensuring that each panel contributes to the preservation of natural resources.",
    },
    {
        title: "Recycling and Reuse",
        content:
            "At Fervent Muliboard Industries Ltd, we are committed to producing Medium Density Fiberboard (MDF) that not only meets the highest standards of quality but also respects our planet. Our MDF is crafted from wood fibers sourced from sustainably managed forests, ensuring that each panel contributes to the preservation of natural resources.",
    },
    {
        title: "Low Emissions",
        content:
            "At Fervent Muliboard Industries Ltd, we are committed to producing Medium Density Fiberboard (MDF) that not only meets the highest standards of quality but also respects our planet. Our MDF is crafted from wood fibers sourced from sustainably managed forests, ensuring that each panel contributes to the preservation of natural resources.",
    },
    {
        title: "Innovation in Sustainability",
        content:
            "At Fervent Muliboard Industries Ltd, we are committed to producing Medium Density Fiberboard (MDF) that not only meets the highest standards of quality but also respects our planet. Our MDF is crafted from wood fibers sourced from sustainably managed forests, ensuring that each panel contributes to the preservation of natural resources.",
    },
    {
        title: "Certified Excellence",
        content:
            "At Fervent Muliboard Industries Ltd, we are committed to producing Medium Density Fiberboard (MDF) that not only meets the highest standards of quality but also respects our planet. Our MDF is crafted from wood fibers sourced from sustainably managed forests, ensuring that each panel contributes to the preservation of natural resources.",
    },
];

const DesignImpressComposition = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="flex flex-col gap-10 w-full h-fit lg:py-10 py-5 2xl:px-20 ipad:px-10 px-5 2xl:max-w-[90rem] relative">
            {/* Title Section */}
            <div className="flex justify-center w-full z-10">
                <p className="lg:text-6xl ipad:text-5xl text-4xl font-bold text-center lg:px-5">
                    <span className="text-[#5e73e1]">MDF</span> Medium
                    <br className="lg:flex hidden"/> density fiberboard
                </p>
            </div>

            {/* Accordion and Image Section */}
            <div className="flex lg:flex-row-reverse flex-col-reverse gap-5 z-20">
                {/* Accordion Items */}
                <div className="lg:w-[50%] w-full">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b-2 border-b-[rgba(0,0,0,0.3)]"
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-lg font-semibold text-left bg-inherit p-4 z-10 focus:outline-none flex justify-between items-center"
                            >
                                <span>{item.title}</span>
                                {openIndex === index ? (
                                    <CircleMinus
                                        className="hover:bg-[rgba(0,0,0,0.5)] cursor-pointer rounded-full transition-all duration-200 ease-in-out"/>
                                ) : (
                                    <CirclePlus
                                        className="hover:bg-[rgba(0,0,0,0.5)] cursor-pointer rounded-full transition-all duration-200 ease-in-out"/>
                                )}
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`${
                                    openIndex === index
                                        ? "ipad:max-h-[10rem] max-h-[11rem] opacity-100 p-4"
                                        : "max-h-0 opacity-0 overflow-hidden"
                                } transition-all duration-500 ease-in-out`}
                            >
                                <p className="text-sm font-light text-[rgba(0,0,0,0.5)]">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className="flex flex-col gap-5 lg:w-[50%] w-full lg:px-10">
                    <Image
                        src="/assets/MDF/MDF/1.png"
                        alt="Impress Image"
                        width={400}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
            </div>

            {/* Background Text */}
            <div
                className="flex flex-col items-end uppercase text-[rgba(0,0,0,0.1)] lg:text-[9rem] text-7xl font-bold absolute lg:right-[30%] lg:top-[-2rem] top-0">
                <span className="p-0 m-0 leading-none inline-block">MDF</span>
                <span className="p-0 m-0 leading-none inline-block">Boards</span>
            </div>
        </div>
    );
};

export default DesignImpressComposition;
