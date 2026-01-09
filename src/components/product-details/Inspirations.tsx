import Image from "next/image";
import React from "react";

const Inspirations = () => {
    return (
        <>
            <div className={`flex flex-col w-full justify-between gap-5 py-5 px-5`}>
                {/*    title*/}
                <p className={`text-[rgba(0,0,0,0.3)]`}>Gallery</p>

                {/*    image gallery*/}
                <div className={`flex flex-wrap gap-y-5 justify-between`}>
                    {[...Array(8)].map((_, imgIndex) => (
                        <div key={imgIndex} className={`relative`}>
                            <Image
                                src={`/assets/hdf/MDF.png`}
                                alt="Product Image"
                                width={300}
                                height={300}
                                className=" lg:w-60 ipad:w-44 w-36 lg:h-60 ipad:h-44 h-36"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Inspirations