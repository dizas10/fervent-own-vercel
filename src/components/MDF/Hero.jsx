"use client"
import React from "react";
import Image from "next/image";

const info = [
    {image: `/assets/MDF/Hero/1.png`, id: 1, text: "Brilliant Weave 4854"},
    {image: `/assets/MDF/Hero/2.png`, id: 2, text: "Cairo Walnut 4427"},
    {image: `/assets/MDF/Hero/3.png`, id: 3, text: "Napa Oak 3662"},
    {image: `/assets/MDF/Hero/4.png`, id: 4, text: "Samoa Teak 456"},
    {image: `/assets/MDF/Hero/5.png`, id: 5, text: "Valley Oak 4663"},
    {image: `/assets/MDF/Hero/6.png`, id: 6, text: "Wenge Brew 675"},
]

const Hero = () => {
    const [isSelectdId, setIsSelectedId] = React.useState(1)

    function handleImageSelect(id) {
        setIsSelectedId(id)
    }

    return (
        <div className=" relative -top-0 w-full h-[calc(100vh-110px)]">
            {/*    banner div*/}
            <div className={`w-full bg-[url('/assets/MDF/Hero/Banner.png')] bg-cover
                bg-center h-full relative`}>

                {/*    select MDF section*/}
                <div
                    className={`h-36 bg-[rgba(0,29,40,0.90)] w-full absolute bottom-0 flex lg:py-3 py-10  justify-around`}>
                    {info.map((item, idx) => (
                        <div
                            key={idx}
                            className={`h-full flex flex-col items-center justify-center`}
                        >
                            <Image
                                src={item.image}
                                alt={"Category Image"}
                                width={50}
                                height={50}
                                onClick={() => handleImageSelect(item.id)}
                                className={`${isSelectdId === item.id ?
                                    "border-2 border-[blue] transition-all duration-300 ease-in"
                                    :
                                    ""
                                } rounded lg:w-28 h-[90%] cursor-pointer`}
                            />

                            {/*    text*/}
                            <p className={`h-[10%] text-white lg:text-sm text-xs ipad:w-full w-[50%] text-center`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
