import Image from "next/image";
import React from "react";

const LuxuryElegant = () => {
    const imagePath = "/assets/luxaryElegant/Union.png";

    return (
        <>
            <div
                className="flex lg:flex-row flex-col-reverse items-center justify-center gap-10 w-full h-fit lg:py-10 py-5 lg:px-20 ipad:px-10 px-5 2xl:max-w-[90rem]">

                {/* Image Container */}
                <div className="lg:w-1/2 w-full flex items-center justify-center">
                    {imagePath ? (
                        <Image
                            src={imagePath}
                            alt="Product Image"
                            width={500}
                            height={500}
                            className="lg:w-[80%] w-[50%] h-full"
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>

                {/* Info Titles Section */}
                <div className={`flex flex-col gap-5 lg:w-1/2 w-full h-full justify-center`}>
                    <p className="text-4xl font-bold">
                        Luxury Meets <br/> <span className="text-[#5e73e1]">durability</span>
                    </p>
                    <p className="text-gray-600">
                        Our HDF flooring enhances the look of your home and office with high-quality engineering and
                        exquisite finishes.
                        It boosts your home’s value and appeal.
                    </p>

                    <p className="text-4xl font-bold">
                        Elegance in <br/> <span className="text-[#5e73e1]">every step</span>
                    </p>
                    <p className="text-gray-600">
                        Our HDF flooring enhances the look of your home and office with high-quality engineering and
                        exquisite finishes.
                        It boosts your home’s value and appeal.
                    </p>
                </div>
            </div>
        </>
    );
};

export default LuxuryElegant;
