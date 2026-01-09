import Image from "next/image";
import React from "react";

const info = [
    {
        icon: `/assets/HLP/GreenerFuture/1.png`,
        title: "Eco-Friendly Materials",
        description: "Use of sustainable raw materials and low-emission resins."
    },
    {
        icon: `/assets/HLP/GreenerFuture/2.png`,
        title: "Energy-Efficient Production",
        description: "Adoption of energy-efficient technologies in our manufacturing processes."
    },
    {
        icon: `/assets/HLP/GreenerFuture/3.png`,
        title: "Recycling",
        description: "Incorporation of recycled materials to reduce waste and promote sustainability."
    },
]


const GreenFuture = () => {
    return (
        <>
            <div
                className="flex lg:flex-row flex-col-reverse gap-10 w-full h-fit lg:py-10 py-5  lg:px-20 ipad:px-10 px-5  2xl:max-w-[90rem]">

                {/*    image*/}
                <div className={`lg:w-1/2 ipad:h-[30rem] w-full`}>
                    <Image
                        src={`/assets/HLP/GreenerFuture/container.png`}
                        alt={"Impress Image"}
                        width={1000}
                        height={1000}
                        className={`lg:w-[80%] w-full h-full`}
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
                                <Image
                                    src={item.icon}
                                    alt={"icon Image"}
                                    width={100}
                                    height={100}
                                    className={`w-[10%] h-full`}
                                />
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
        </>
    )
}

export default GreenFuture;