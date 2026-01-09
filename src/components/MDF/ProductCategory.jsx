"use client";
import React, {useState} from "react";
import Image from "next/image";
import {MoveLeft, MoveRight} from "lucide-react";
import image_01 from "../../../public/assets/MDF/ProductCategory/1.png";
import image_02 from "../../../public/assets/MDF/ProductCategory/1.png";
import image_03 from "../../../public/assets/MDF/ProductCategory/1.png";
import image_04 from "../../../public/assets/MDF/ProductCategory/1.png";
import image_05 from "../../../public/assets/MDF/ProductCategory/1.png";

const MultiBoardSlider = () => {
    const imageSlider = [
        {img: image_01, info: "MR MDF BOARD"},
        {img: image_02, info: "MDF BOARD"},
        {img: image_03, info: "Veneer MDF"},
        {img: image_04, info: "HMR MDF"},
        {img: image_05, info: "HPL Moisture Proof"},
    ];

    const [positions, setPositions] = useState(imageSlider);

    const moveForward = () => {
        const newPositions = [positions[positions.length - 1], ...positions.slice(0, -1)];
        setPositions(newPositions);
    };

    const moveBackward = () => {
        const newPositions = [...positions.slice(1), positions[0]];
        setPositions(newPositions);
    };

    const moveToCenter = (clickedIndex) => {
        if (clickedIndex === 1) return;

        const shifts = (1 - clickedIndex + positions.length) % positions.length;
        const newPositions = [
            ...positions.slice(-shifts),
            ...positions.slice(0, positions.length - shifts),
        ];
        setPositions(newPositions);
    };

    return (
        <>
            {/* Title Section */}
            <div className="flex w-full max-w-[80rem] lg:pl-[4rem] pl-[1rem] mb-5">
                <p className="lg:text-6xl ipad:text-5xl text-4xl font-bold">
                    Product Category
                    <br className="lg:flex hidden"/> of MDF
                </p>
            </div>

            <div className="flex flex-col items-center space-y-4 w-full relative">
                {/* Box Container */}
                <div
                    className="flex ipad:justify-center justify-end items-center relative w-full h-[30rem] ipad:ml-0 ml-44">
                    {positions.map((pos, index) => (
                        <div
                            key={pos.info}
                            onClick={() => moveToCenter(index)}
                            className={`absolute transition-all duration-500 ease-in-out
                                    ${index === 1 ? "w-[13.2rem] h-[20rem]" : "w-[13.2rem] h-[16rem]"}
                                     flex top-0 rounded cursor-pointer`}
                            style={{
                                transform: `translateX(${(index - 2) * 230}px)`,
                            }}
                        >
                            <div className={`flex flex-col`}>
                                <Image
                                    src={pos.img}
                                    alt={pos.info}
                                    width={500}
                                    height={500}
                                    className={`w-full h-[90%] object-cover rounded ${
                                        index === 1 && "border-2 border-[#00A5E3]"
                                    }`}
                                />

                                <p>{pos.info}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between w-20 px-10 absolute ipad:top-[-5rem] top-[-4rem] 2xl:right-[30rem] right-28">
                    <button
                        onClick={moveForward}
                        className="px-4 py-2 scale-100 hover:scale-125 transition-all duration-500 ease-in-out"
                    >
                        <MoveLeft color={"#00A5E3"}/>
                    </button>
                    <button
                        onClick={moveBackward}
                        className="px-4 py-2 scale-100 hover:scale-125 transition-all duration-500 ease-in-out"
                    >
                        <MoveRight color={"#00A5E3"}/>
                    </button>

                </div>
            </div>
        </>
    );
};

export default MultiBoardSlider;
