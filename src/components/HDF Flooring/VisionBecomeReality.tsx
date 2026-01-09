"use client"
import React from "react";
import {BsArrowRightShort} from "react-icons/bs";
import Image from "next/image";


const VisionBecomereality = () => {
    const data = [
        {image: `/assets/visionBecomeReality/1.png`, text: "Kitchen Room MDF Wood Flooring"},
        {image: `/assets/visionBecomeReality/2.png`, text: "Restaurant HDF Flooring"},
        {image: `/assets/visionBecomeReality/3.png`, text: "Retail Stores HDF Wood Flooring"},
        {image: `/assets/visionBecomeReality/4.png`, text: "Bedroom HDF Floor Covering"},
        {image: `/assets/visionBecomeReality/5.png`, text: "Office HDF Flooring"},
        {image: `/assets/visionBecomeReality/6.png`, text: "Healthcare HDF Wood Flooring"},
    ]
    const [image0, setImage0] = React.useState(data[0]);
    const [image1, setImage1] = React.useState(data[1]);
    const [image2, setImage2] = React.useState(data[2]);
    const [image3, setImage3] = React.useState(data[3]);
    const [image4, setImage4] = React.useState(data[4]);
    const [image5, setImage5] = React.useState(data[5]);
    const [isHovered, setIsHoverd] = React.useState(false)

    function MouseEnter() {
        setIsHoverd(true)
    }

    function MouseLeave() {
        setIsHoverd(false)
    }

    React.useEffect(() => {
        if (data && data.length > 0) {
            setImage0(data[0]);
            setImage1(data[1]);
            setImage2(data[2]);
            setImage3(data[3]);
            setImage4(data[4]);
            setImage5(data[5]);
        }
    }, []);

    return (
        <>
            <div
                className="flex flex-col lg:gap-20 gap-5 w-full lg:h-[60rem] ipad:h-[80rem] h-[60rem] lg:py-10 py-5
                lg:px-20 ipad:px-10 px-5  2xl:max-w-[90rem]">

                {/* div1*/}
                <div className={`w-full flex lg:flex-row flex-col gap-5 justify-between items-center`}>
                    {/*title*/}
                    <p
                        className={`lg:text-6xl ipad:text-5xl text-4xl font-bold lg:w-1/2 w-full`}>
                        Where your vision<br className={`lg:flex hidden`}/> <span
                        className={`text-[#5e73e1]`}>becomes</span> reality
                    </p>

                    {/*  info  */}
                    <div className={`text-[rgba(0,0,0,0.7)] text-sm lg:w-1/2 w-full flex flex-col gap-5 lg:items-end`}>
                        <p className={`lg:w-[60%]`}> For every expression we’ve designed a surface, just for your decor.
                            Choose from our wide range of premium surface solutions.</p>

                        {/*    more navigation*/}
                        <div className={`lg:w-[60%] ml-6 lg:ml-0`}>
                            <button
                                className={`flex flex-col w-fit
                            ${isHovered ? "translate-x-0 transition-all duration-500 ease-in-out"
                                    :
                                    "-translate-x-5 transition-all duration-500 ease-in-out"}
                            `}
                                onMouseEnter={MouseEnter}
                                onMouseLeave={MouseLeave}
                            >
                         <span className="flex gap-2 items-center">
                             <BsArrowRightShort className={`
                             ${isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out "
                                 :
                                 "-translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out "}
                                    `}/>
                                        Explore All
                             <BsArrowRightShort className={`
                                ${!isHovered ? "translate-x-0 opacity-100 scale-100 transition-all duration-500 ease-in-out"
                                 :
                                 "translate-x-5 opacity-0 scale-150 transition-all duration-500 ease-in-out"}
                                      `}/>
                          </span>
                                <span className={`w-full h-[1px] bg-[blue] mt-1 
                            ${!isHovered ?
                                    "opacity-100 transition-all duration-500 ease-in-out delay-500"
                                    :
                                    "opacity-0 transition-all duration-500 ease-in-out"}
                            `
                                }></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* div2 */}
                <div className="w-full flex lg:flex-row flex-col  lg:h-[35rem] h-[90rem]">

                    {/*    part 1*/}
                    <div className={`lg:w-1/2 w-full lg:h-full ipad:h-[30rem] h-[20rem] flex`}>

                        {/*image 0*/}
                        <div className={`w-1/2 flex ipad:gap-2 flex-col h-full p-2`}>
                            <Image
                                src={image0.image}
                                alt={"Product Image 0"}
                                width={500}
                                height={500}
                                className={`w-full ipad:h-[95%] h-[90%]`}
                            />

                            <p className={`h-[5%] flex justify-center lg:text-lg text-xs`}>{image0.text}</p>
                        </div>

                        <div className={`flex flex-col w-1/2`}>

                            {/*    image 1*/}
                            <div className={`w-full flex gap-2 flex-col p-2  h-1/2`}>
                                <Image
                                    src={image1.image}
                                    alt={"Product Image 0"}
                                    width={500}
                                    height={500}
                                    className={`w-full ipad:h-[90%] h-[80%]`}
                                />

                                <p className={`h-[10%] flex justify-center lg:text-lg text-xs`}>{image1.text}</p>
                            </div>

                            {/*    image 2*/}
                            <div className={`w-full flex gap-2 flex-col p-2  h-1/2`}>
                                <Image
                                    src={image2.image}
                                    alt={"Product Image 0"}
                                    width={500}
                                    height={500}
                                    className={`w-full ipad:h-[90%] h-[80%]`}
                                />

                                <p className={`h-[10%] flex justify-center lg:text-lg text-xs`}>{image2.text}</p>
                            </div>
                        </div>
                    </div>


                    {/*    part 2*/}
                    <div
                        className={`lg:w-1/2 w-full lg:h-full ipad:h-[30rem] h-[20rem] flex lg:flex-row flex-row-reverse`}>

                        {/*image 3*/}
                        <div className={`w-1/2 flex gap-2 flex-col h-full p-2`}>
                            <Image
                                src={image3.image}
                                alt={"Product Image 0"}
                                width={500}
                                height={500}
                                className={`w-full h-[95%]`}
                            />

                            <p className={`h-[5%] flex justify-center lg:text-lg text-xs`}>{image3.text}</p>
                        </div>

                        <div className={`flex flex-col w-1/2`}>

                            {/*    image 4*/}
                            <div className={`w-full flex gap-2 flex-col p-2  h-1/2`}>
                                <Image
                                    src={image4.image}
                                    alt={"Product Image 0"}
                                    width={500}
                                    height={500}
                                    className={`w-full h-[90%]`}
                                />

                                <p className={`h-[10%] flex justify-center lg:text-lg text-xs`}>{image4.text}</p>
                            </div>

                            {/*    image 5*/}
                            <div className={`\`w-full flex gap-2 flex-col p-2  h-1/2`}>
                                <Image
                                    src={image5.image}
                                    alt={"Product Image 0"}
                                    width={500}
                                    height={500}
                                    className={`w-full h-[90%]`}
                                />

                                <p className={`h-[10%] flex justify-center lg:text-lg text-xs`}>{image5.text}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VisionBecomereality