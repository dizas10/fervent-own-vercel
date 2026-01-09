"use client"
import React from "react";
import {CirclePlus, CircleMinus} from 'lucide-react';
import Image from "next/image";

const menuItems = [
    {title: "Thickness range", content: "Available In various thickness to suit different needs"},
    {title: "Surface Finish", content: "Available In various thickness to suit different needs"},
    {title: "Impact Resistance", content: "Available In various thickness to suit different needs"},
    {title: "Fire Retardant", content: "Available In various thickness to suit different needs"},
    {title: "UV Resistance", content: "Available In various thickness to suit different needs"},
    {title: "Moisture Resistance", content: "Available In various thickness to suit different needs"},
];


const DesignImpressComposition = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div
                className="flex flex-col gap-10 w-full h-fit lg:py-10 py-5  2xl:px-20 ipad:px-10 px-5  2xl:max-w-[90rem] relative">

                {/* 1st Part*/}
                <div className={`flex lg:flex-row flex-col gap-5 z-10`}>

                    {/* title */}
                    <p className="lg:text-6xl ipad:text-5xl text-4xl font-bold lg:w-[50%] lg:px-5 w-full">
                        Designed to <br className={`lg:flex hidden`}/> Impress, <span className="text-[#5e73e1]">Build to last</span>
                    </p>

                    {/* title 2 */}
                    <p className="font-light lg:w-[50%] w-full text-[rgba(0,0,0,0.7)] text-sm lg:px-10">
                        Discover the ultimate combination of durability and design versatility with our High
                        Pressure
                        Laminate (HPL) products. At Fervent Muliboard Industries Ltd, our HPL panels are engineered
                        to meet the highest standards, offering a perfect solution for both residential and
                        commercial
                        applications. Experience the blend of aesthetics and functionality that sets our HPL apart.
                    </p>
                </div>

                {/* 2nd Part*/}
                <div className={`flex lg:flex-row flex-col gap-5 z-10`}>

                    {/*   accordion items */}
                    <div className={`lg:w-[50%] w-full`}>
                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b-2 border-b-[rgba(0,0,0,0.3)]">
                                {/* Title-header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-lg font-semibold text-left p-4  focus:outline-none"
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{item.title}</span>
                                        <span className="text-lg">
                                           {openIndex === index ?
                                               <CircleMinus
                                                   className={`hover:bg-[rgba(0,0,0,0.5)] rounded-full transition-all duration-200 ease-in-out`}/>
                                               :
                                               <CirclePlus
                                                   className={`hover:bg-[rgba(0,0,0,0.5)] rounded-full transition-all duration-200 ease-in-out`}
                                               />}
                                        </span>
                                    </div>
                                </button>

                                {/* Content */}
                                <div className={`${openIndex === index ?
                                    "opacity-100 max-h-[5rem] p-4 transition-all duration-500 ease-in-out"
                                    :
                                    "max-h-0 opacity-0 transition-all duration-500 ease-in-out"}`}>
                                    <p className={`text-sm font-light text-[rgba(0,0,0,0.5)]`}>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*    Images*/}
                    <div className={`flex flex-col gap-5 lg:w-[50%] w-full lg:px-10`}>
                        <Image
                            src={`/assets/HLP/DesignImpress/1.png`}
                            alt={"Impress Image"}
                            width={400}
                            height={400}
                            className={`w-full h-[20rem]`}
                        />

                        <Image
                            src={`/assets/HLP/DesignImpress/2.png`}
                            alt={"Impress Image"}
                            width={400}
                            height={400}
                            className={`w-full h-[20rem]`}
                        />
                    </div>
                </div>

                {/*Composition*/}
                <div className={`w-full flex flex-col lg:gap-20 gap-10 items-center justify-center mt-20`}>
                    {/*title*/}
                    <p className={`lg:text-6xl text-4xl font-bold text-[#5e73e1]`}>Composition</p>
                    {/*    image*/}
                    <Image
                        src={`/assets/HLP/DesignImpress/composition.png`}
                        alt={"Impress Image"}
                        width={1000}
                        height={1000}
                        className={`lg:w-[80%] w-full h-full`}
                    />
                </div>

                {/*    Background text*/}
                <div
                    className={`flex flex-col items-end uppercase text-[rgba(0,0,0,0.1)] lg:text-[9rem] text-7xl font-bold absolute lg:right-[30%] lg:top-[-2rem] top-0`}>
                    <span className={`p-0 m-0 leading-none inline-block`}>HLP</span>
                    <span className={`p-0 m-0 leading-none inline-block`}>Boards</span>
                </div>
            </div>
        </>
    )
}

export default DesignImpressComposition;