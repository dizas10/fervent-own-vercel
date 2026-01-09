"use client"
import React from "react";
import Image from "next/image";

const info = [
    {
        icon: `/assets/hdf/Elegnce/1.png`,
        title: "Eco-Friendly Materials",
        description: "Use of sustainable raw materials and low-emission resins."
    },
    {
        icon: `/assets/hdf/Elegnce/2.png`,
        title: "Energy-Efficient Production",
        description: "Adoption of energy-efficient technologies in our manufacturing processes."
    },
    {
        icon: `/assets/hdf/Elegnce/3.png`,
        title: "Recycling",
        description: "Incorporation of recycled materials to reduce waste and promote sustainability."
    },
]


const DesignImpressComposition = () => {
    return (
        <>
            <div
                className="flex flex-col gap-10 w-full h-fit lg:py-10 py-5  2xl:px-20 ipad:px-10 px-5  2xl:max-w-[90rem] relative">

                {/* 1st Part*/}
                <div className={`flex lg:flex-row flex-col items-center gap-10 z-10`}>

                    {/*    image*/}
                    <div className={`lg:w-1/2 ipad:h-[30rem] w-full`}>
                        <Image
                            src={`/assets/hdf/Elegnce/container.png`}
                            alt={"Elegance Image"}
                            width={1000}
                            height={1000}
                            className={`w-full h-full`}
                        />
                    </div>

                    {/*    div 2*/}
                    <div className={`lg:w-1/2 w-full flex flex-col gap-10`}>

                        {/*  title*/}
                        <p
                            className={`lg:text-6xl ipad:text-5xl text-4xl font-bold lg:w-[60%]`}>
                            Commitment to a <span className={`text-[#5e73e1]`}>Greener</span> Future
                        </p>

                        {/*    description*/}
                        <p className="font-light text-[rgba(0,0,0,0.7)] text-sm">
                            At Fervent Muliboard Industries Ltd, we prioritize sustainability in our manufacturing
                            processes.
                            Our HPL panels are produced with eco-friendly materials and practices, ensuring minimal
                            environmental impact.
                        </p>

                        {/*  point lists  */}
                        <div className={`flex flex-col gap-10`}>
                            {info && info.map((item, idx) => (
                                <div
                                    className={`flex gap-5`}
                                    key={idx}
                                >

                                    {/*    icon*/}
                                    {item?.icon ? (
                                        <Image
                                            src={item.icon}
                                            alt={`Icon for ${item.title}`}
                                            width={100}
                                            height={100}
                                            className={`w-[10%] h-full`}
                                        />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                    {/*    title + subtext*/}
                                    <div className={`flex flex-col w-[90%] gap-2`}>

                                        {/*title*/}
                                        <p className={`font-semibold text-lg`}>{item.title}</p>

                                        {/* descriptions */}
                                        <p className={`text-[rgba(0,0,0,0.7)] text-sm`}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                    className={`flex flex-col items-end uppercase text-[rgba(0,0,0,0.1)] lg:text-[10rem] text-7xl font-bold absolute lg:right-[30%] lg:top-[-2rem] top-0`}>
                    <span className={`p-0 m-0 leading-none inline-block`}>HDF</span>
                    <span className={`p-0 m-0 leading-none inline-block`}>Flooring</span>
                </div>
            </div>
        </>
    )
}

export default DesignImpressComposition;