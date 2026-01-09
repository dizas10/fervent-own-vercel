import Image from "next/image";
import React from "react";

const info = [
    {
        icon: `/assets/particle-board/smartChoice/1.png`,
        title: "Better Quality",
        description: "Owing to its non-porous and easy to clean properties, it is resistant to marks, smudges and stains."
    },
    {
        icon: `/assets/particle-board/smartChoice/2.png`,
        title: "Friendly Budget",
        description: "The tough surface of MerinoLam helps protect against scratches, especially from varying pressures of everyday use in an office environment."
    },
    {
        icon: `/assets/particle-board/smartChoice/3.png`,
        title: "Eco-Friendly Production",
        description: "These show impact resistance of high standard."
    }
]

const WhyChooseUs = () => {
    return (
        <>
            <div
                className="flex flex-col lg:gap-20 gap-5 w-full h-fit lg:py-28 py-5
                lg:px-20 ipad:px-10 px-5  2xl:max-w-[90rem] relative">

                {/* div1*/}
                <div className={`w-full flex items-center z-10`}>

                    {/*title*/}
                    <p
                        className={`lg:text-6xl ipad:text-5xl text-4xl font-bold w-fit`}>
                        Smart choose for <br className={`lg:flex hidden`}/> <span
                        className={`text-[#5e73e1]`}>cost-effective</span> solutions
                    </p>

                </div>

                {/* div2*/}
                <div className={`grid grid-cols-12 lg:gap-2 gap-5 z-10`}>
                    {info.map((item, idx) => (
                        <div
                            className={`w-full lg:h-[20rem] h-fit flex flex-col gap-5 lg:col-span-4 col-span-12`}
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
                            <p className={`text-[#5e73e1] text-xl lg:w-[30%] `}>{item.title}</p>

                            {/*  description  */}
                            <p className={`text-[rgba(0,0,0,0.7)] text-sm lg:w-[85%] text-justify`}>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/*group Image*/}
                <div className={`w-full flex items-center justify-center`}>
                    <Image
                        src={`/assets/particle-board/smartChoice/group.png`}
                        alt={"Product Image"}
                        width={300}
                        height={300}
                        className={`w-[90%] h-full`}
                    />
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

                {/* background text*/}
                <div className={`absolute top-0 lg:text-[10rem] text-7xl font-bold text-[rgba(0,0,0,0.1)] w-full`}>
                    <p className={`p-0 m-0 leading-none inline-block absolute right-16`}>PARTICLE</p>
                    <p className={`p-0 m-0 leading-none inline-block  absolute lg:top-28 top-16`}>BOARDS</p>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs;