import Image from "next/image";
import React from "react";

const RelatedProducts = () => {
    return (
        <>
            <div className={`flex flex-col w-full justify-between gap-5 py-5 px-5`}>
                {/*    title*/}
                <p className={`text-[rgba(0,0,0,0.3)]`}>Related products</p>

                {/*    image gallery*/}
                <div className={`flex flex-wrap lg:gap-0 ipad:gap-5 lg:justify-between`}>
                    {[...Array(6)].map((_, imgIndex) => (
                        <div key={imgIndex} className={`relative`}>
                            <Image
                                src={`/assets/hdf/MDF.png`}
                                alt="Product Image"
                                width={300}
                                height={300}
                                className="w-36 h-44"
                            />
                            <p className={`text-white absolute bottom-1/2  -translate-x-1/2 left-1/2`}>text</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RelatedProducts