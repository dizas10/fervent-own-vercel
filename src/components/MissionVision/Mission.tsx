import React from "react";
import light_image from "../../assets/Image 2.png";
import small_image from "../../assets/mission-small.png";
import Image from "next/image";

const Mission = () => {
    return (
        // <div></div>
        <div className=" w-full h-auto flex flex-col items-center justify-center mx-auto">
            <div className=" h-[100px] w-full bg-gradient-to-t from-[#FFFFFF] to-[#EEEDE9] "></div>

            <div className=" w-full h-auto bg-[#FFFFFF] flex items-center justify-center ">
                <div className=" relative w-full h-fit flex items-start justify-between mt-10 ">
                    <div></div>
                    <div>
                        <Image
                            src={light_image}
                            width={1100}
                            height={400}
                            alt="Light Image"
                            priority
                            className="ipad:w-[90%] w-[95%] ipad:ml-8 ml-3  h-[550px] object-contain "
                        />
                        <Image
                            src={small_image}
                            width={300}
                            height={400}
                            alt="Light Image"
                            priority
                            className="absolute top-80 left-10 lg:w-[270px] w-[10rem] lg:h-[350px] object-contain"
                        />
                        <div
                            className=" w-full h-fit flex ipad:flex-row  flex-col items-start justify-end gap-6 lg:mt-10 lg:pr-[5%]">
                            <div
                                className=" max-w-[370px] h-fit bg-white flex flex-col items-start gap-5 p-4 ">
                                <h1 className="text-4xl font-bold ">
                                    Our <br className={`ipad:flex hidden `}/>
                                    <span className=" text-[#00A5E3] ">mission</span>
                                </h1>
                                <p>
                                    At MDF Multiboard Industries, our mission is to revolutionize
                                    the building materials industry by providing sustainable,
                                    innovative, and high-quality solutions that exceed customer
                                    expectations. We are committed to continuous improvement and
                                    innovation, striving to lead the industry with eco-friendly
                                    practices and cutting-edge technologies.
                                </p>
                            </div>
                            <div
                                className=" w-[370px] h-fit bg-white  flex flex-col items-start gap-5 justify-between p-4">
                                <h1 className=" text-4xl font-bold ">
                                    Our <br className={`ipad:flex hidden `}/>
                                    <span className=" text-[#00A5E3] ">vision</span>
                                </h1>
                                <p>
                                    At MDF Multiboard Industries, our vision is to be a global
                                    leader in sustainable building materials, transforming the
                                    construction industry with innovative solutions that
                                    prioritize quality, environmental responsibility, and customer
                                    satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
