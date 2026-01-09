"use client";
import React, {useState} from "react";
import image_01 from "../../../public/assets/board/image 01.png";
import image_02 from "../../../public/assets/board/image 02.png";
import image_03 from "../../../public/assets/board/image 22.png";
import image_04 from "../../../public/assets/board/image 02.png";
import image_05 from "../../../public/assets/board/image 01.png";
import Image from "next/image";
import {MoveLeft, MoveRight} from 'lucide-react';


const multiBoardSlider = () => {
    const imageSlider = [
        {img: image_01, info: "MDF Veneered Board 1"},
        {img: image_02, info: "MDF Veneered Board 2"},
        {img: image_03, info: "MDF Veneered Board 3"},
        {img: image_04, info: "MDF Veneered Board 4"},
        {img: image_05, info: "MDF Veneered Board 5"},
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [positions, setPositions] = useState(imageSlider);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [shiftedPositions, setShiftedPositions] = useState(positions);

    const moveForward = () => {
        /** Shift all elements one position forward **/
        const newPositions = [shiftedPositions[shiftedPositions.length - 1], ...shiftedPositions.slice(0, -1)];
        setShiftedPositions(newPositions);
        setTimeout(() => {
            setPositions(newPositions);
        }, 10);
    };

    const moveBackward = () => {
        /** Shift all elements one position backward **/
        const newPositions = [...shiftedPositions.slice(1), shiftedPositions[0]];
        setShiftedPositions(newPositions);
        setTimeout(() => {
            setPositions(newPositions);
        }, 10);
    };

    const moveToCenter = (clickedIndex: number) => {
        /** If the clicked box is already at index 2 (center), do nothing **/
        if (clickedIndex === 2) return;

        /** Calculate how many shifts are needed to bring the clicked index to position 2 **/
        const shifts = (2 - clickedIndex + shiftedPositions.length) % shiftedPositions.length;
        const newPositions = [
            ...shiftedPositions.slice(-shifts),
            ...shiftedPositions.slice(0, shiftedPositions.length - shifts),
        ];
        setShiftedPositions(newPositions);
        setTimeout(() => {
            setPositions(newPositions);
        }, 10);
    };

    return (
        <>
            <div className="flex flex-col items-center space-y-4 w-full  relative">
                {/* Box Container */}
                <div className="flex justify-center items-center relative w-full h-fit">
                    {shiftedPositions.map((pos, index) => {
                        const positionIndex = positions.indexOf(pos);
                        return (
                            <div
                                key={pos.info}
                                onClick={() => moveToCenter(index)}
                                className={`absolute
                                    transition-all duration-500 ease-in-out
                                    ${index === 2 ? "w-[13.2rem] h-[24rem]" : ""}
                                    ${index === 1 || index === 3 ? "w-[10rem] h-[18rem]" : "w-[9rem] h-[15rem]"}
                                    bottom-0 flex  rounded cursor-pointer`}
                                style={{
                                    transform: `translateX(${(positionIndex - 2) * 230}px)`,
                                }}
                            >
                                <p className={`hidden`}>{pos.info}</p>
                                <Image
                                    src={pos.img}
                                    alt={pos.info}
                                    className={`w-full object-cover rounded ${index === 2 && "border-2 border-[#00A5E3]"}`}
                                />

                                <div className={`absolute w-[15rem] h-[26rem] 
                                    ${index === 2 ?
                                    "w-[15.2rem] h-[26rem] opacity-100 transition-all duration-200 delay-200"
                                    :
                                    "w-[12rem] h-[20rem] opacity-0 transition-all duration-200"} top-[-1rem] left-[-1rem] rounded`}
                                >
                                    {/*    pointer bar*/}
                                    <div
                                        className={`absolute h-[5rem] 
                                        w-[0.1rem] bg-[#00A5E3] left-[calc(50%-30px)] -translate-x-1/2 top-[-4rem]`}>
                                        {/*inner circle*/}
                                        <div
                                            className={`absolute h-3 w-3 rounded-full bg-[#00A5E3] top-0 left-1/2 -translate-x-1/2`}>
                                            {/*info section*/}
                                            <div className={`absolute top-[-3rem] w-[15rem] left-1/2 -translate-x-1/2`}>
                                                <p className={`text-xl font-semibold p-3`}>{pos.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <div
                    className="flex lg:justify-between justify-center w-full 2xl:px-48 lg:px-14  absolute ipad:top-0 lg:bottom-[5em] ipad:bottom-[-15rem] bottom-[-5rem] ">
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

export default multiBoardSlider;
