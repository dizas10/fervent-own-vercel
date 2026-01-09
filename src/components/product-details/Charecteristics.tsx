import Image from "next/image";
import React from "react";

const Charecteristics = () => {
    return (
        <>
            <div className={`flex lg:flex-row flex-col justify-between py-5 px-5`}>

                {/*    measurement div*/}
                <div className={`ipad:w-1/3 w-full flex flex-col gap-10 text-lg`}>

                    {/*    grade*/}
                    <div>
                        <p className={`text-[rgba(0,0,0,0.3)]`}>Grade</p>
                        <p>MR medium density</p>
                    </div>

                    {/*    Weight*/}
                    <div>
                        <p className={`text-[rgba(0,0,0,0.3)]`}>Weight</p>
                        <p>31.25 kg</p>
                    </div>

                    {/*    Thickness*/}
                    <div>
                        <p className={`text-[rgba(0,0,0,0.3)]`}>Thickness</p>
                        <p>15 mm</p>
                    </div>

                    {/*    Size*/}
                    <div>
                        <p className={`text-[rgba(0,0,0,0.3)]`}>Size</p>
                        <p>2440 mm x 1220 mm</p>
                    </div>
                </div>

                {/*    standard + application icons div*/}
                <div className={`lg:w-[66.7%] w-full border flex ipad:flex-row flex-col ipad:gap-20 gap-10`}>

                    {/*   standard div*/}
                    <div>
                        <p className={`text-lg text-[rgba(0,0,0,0.3)] pb-5`}>Standard</p>

                        <div className={`flex ipad:flex-col gap-5`}>
                            <div className={`flex ipad:flex-row flex-col items-center gap-2`}>
                                <Image
                                    src={`/assets/ProductDetailsPage/icons/1.png`}
                                    alt={"Category Image"}
                                    width={100}
                                    height={100}
                                    className={`w-14 h-14`}
                                />

                                <p>UV stability</p>
                            </div>

                            <div className={`flex ipad:flex-row flex-col items-center gap-2`}>
                                <Image
                                    src={`/assets/ProductDetailsPage/icons/2.png`}
                                    alt={"Category Image"}
                                    width={100}
                                    height={100}
                                    className={`w-14 h-14`}
                                />
                                <p>Easy to maintain</p>
                            </div>

                            <div className={`flex ipad:flex-row flex-col items-center gap-2`}>
                                <Image
                                    src={`/assets/ProductDetailsPage/icons/3.png`}
                                    alt={"Category Image"}
                                    width={100}
                                    height={100}
                                    className={`w-14 h-14`}
                                />
                                <p>Stain resistance</p>
                            </div>
                        </div>
                    </div>

                    {/*   application div*/}
                    <div>
                        <p className={`text-lg text-[rgba(0,0,0,0.3)] pb-5`}>Application</p>

                        <div className={`flex ipad:flex-col gap-5`}>
                            <div className={`flex ipad:flex-row flex-col items-center gap-2`}>
                                <Image
                                    src={`/assets/ProductDetailsPage/icons/4.png`}
                                    alt={"Category Image"}
                                    width={100}
                                    height={100}
                                    className={`w-14 h-14`}
                                />

                                <p>Interior frontal</p>
                            </div>

                            <div className={`flex ipad:flex-row flex-col items-center gap-2`}>
                                <Image
                                    src={`/assets/ProductDetailsPage/icons/5.png`}
                                    alt={"Category Image"}
                                    width={100}
                                    height={100}
                                    className={`w-14 h-14`}
                                />
                                <p>Interior tops</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charecteristics