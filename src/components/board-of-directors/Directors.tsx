"use client"
import Image from "next/image";
import {BsArrowRightShort} from "react-icons/bs";
import React from "react";

const Directors = () => {
    const [isHovered, setIsHoverd] = React.useState(false)

    function MouseEnter() {
        setIsHoverd(true)
    }

    function MouseLeave() {
        setIsHoverd(false)
    }

    // static data

    const DirectorsData = [
        {
            name: "Zakia Sultana",
            designation: "Managing Director",
            about1: "Zakia Sultana is the Managing Director of Fervent Multiboard Industries, where she brings over 20 years of industry experience and a passion for innovation",
            about2: "Under her guidance, Fervent Multiboard has become a leader in sustainable building materials, emphasizing quality, customer satisfaction, and environmental responsibility" +
                "Zakia's commitment to excellence and her focus on empowering her team have set a strong foundation for the company's continued success.",
            img: `/assets/boardofdirectors/Shika Ma'am.png`
        },
        {
            name: "Nisat Tasnim Shuchi",
            designation: "Director",
            about1: "As a dynamic Director at Fervent Multiboard Industries, Nishat Tasnim Shuchi is a driving force behind our innovative approach to sustainable building materials. With a strong foundation in economics and entrepreneurship, she has been instrumental in driving key strategic initiatives that have enhanced both the company’s market position and its social impact. ",
            about2: "Her passion for innovation and sustainability is evident in the groundbreaking projects she has led, positioning Fervent as a leader in competitive and responsible business practices. Shuchi’s problem-solving skills, combined with her ability to communicate and collaborate with a diverse team, make her a driving force in creating lasting value for Fervent’s stakeholders and the broader community",
            img: `/assets/boardofdirectors/Shuchi Ma'am.jpg`
        },
        {
            name: "Sadman Sakib Dipro",
            designation: "Director",
            about1: "Shadman Sakib Dipro is a dynamic leader at Fervent Multiboard Industries, known for his innovative thinking and fresh perspective. His background in business development and a passion for sustainable solutions, Shadman has been a driving force in shaping the company’s strategic direction and unlocking new growth opportunities. ",
            about2: "Shadman's commitment to excellence and forward-thinking approach have been invaluable in driving Fervent's success. His leadership and vision continue to inspire our team and shape our future ",
            img: `/assets/boardofdirectors/Director3 Image.png`
        },
    ]


    return (
        <div>
            {DirectorsData.map((item, idx) => (
                <div
                    className={`flex lg:flex-row gap-5 p-10 relative
                   ${idx % 2 !== 0 ?
                        "flex-col lg:flex-row" : "flex-col-reverse lg:flex-row-reverse"
                    }
                   `}
                    key={idx}
                >
                    {/* Chairman message */}
                    <div
                        className={`lg:w-1/2 w-full flex flex-col gap-10 text-[rgba(0,0,0,0.7)]`}

                    >
                        <div className={`flex flex-col gap-2`}>
                            <p className={`text-4xl capitalize font-bold`}>{item.name}</p>
                            <span className={`text-[blue]`}>{item.designation}</span>
                        </div>

                        {/*message*/}
                        <div className={`text-justify`}>
                    <span>
                        {item.about1} <br className={`mb-5`}/>
                        {item.about2}
                    </span>
                        </div>

                        {/*more button*/}
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
                Know More
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


                    {/* Image Section */}
                    <div className={`flex justify-center lg:w-1/2 w-full  relative`}>
                        <Image
                            src={item.img}
                            width={400}
                            height={200}
                            alt={`chairman_image`}
                            className={`z-10`}
                        />
                    </div>
                </div>))}
        </div>
    );
};

export default Directors;