import Image from "next/image";
import React from "react";

const info = [
    {
        icon: `/assets/whyChoseUs/1.png`,
        title: "Better Quality",
        description: "Owing to its non-porous and easy to clean properties, it is resistant to marks, smudges and stains."
    },
    {
        icon: `/assets/whyChoseUs/2.png`,
        title: "Friendly Budget",
        description: "The tough surface of MerinoLam helps protect against scratches, especially from varying pressures of everyday use in an office environment."
    },
    {
        icon: `/assets/whyChoseUs/3.png`,
        title: "Eco-Friendly Production",
        description: "These show impact resistance of high standard."
    },
    {
        icon: `/assets/whyChoseUs/4.png`,
        title: "Client Satisfaction",
        description: "These laminates are moisture resistant, keeping the condition intact for long."
    },
]

const WhyChooseUs = () => {
    return (
        <>
            <div
                className="flex flex-col lg:gap-20 gap-5 w-full lg:h-screen h-fit lg:py-10 py-5
                lg:px-20 ipad:px-10 px-5  2xl:max-w-[90rem]">

                {/* div1*/}
                <div className={`w-full flex lg:flex-row flex-col gap-5 justify-between items-center`}>

                    {/*title*/}
                    <p
                        className={`lg:text-6xl ipad:text-5xl text-4xl font-bold lg:w-1/2 w-full`}>
                        Why <br className={`lg:flex hidden`}/> <span className={`text-[#5e73e1]`}>Choose</span> Us
                    </p>

                    {/*  info  */}
                    <div className={`text-[rgba(0,0,0,0.7)] text-sm lg:w-1/2 w-full flex lg:justify-end`}>
                        <p className={`lg:w-[60%]`}> We are dedicated to offering high-quality flooring products backed
                            by
                            unparalleled craftsmanship
                            and customer service.</p>
                    </div>
                </div>

                {/* div2*/}
                <div className={`grid grid-cols-12 lg:gap-2 gap-5`}>
                    {info.map((item, idx) => (
                        <div
                            className={`w-full lg:h-[20rem] h-fit flex flex-col gap-5 lg:col-span-3 col-span-12`}
                            key={idx}>

                            {/* icon*/}
                            {item?.icon ? (
                                <Image
                                    src={item.icon}
                                    alt={item.title || "Category Image"}
                                    width={100}
                                    height={100}
                                    className={`w-14 h-14`}
                                />
                            ) : (
                                <p>No icon available</p>
                            )}

                            {/*    title*/}
                            <p className={`text-[#5e73e1] text-xl lg:w-[40%] `}>{item.title}</p>

                            {/*  description  */}
                            <p className={`text-[rgba(0,0,0,0.7)] text-sm lg:w-[85%] text-justify`}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs;