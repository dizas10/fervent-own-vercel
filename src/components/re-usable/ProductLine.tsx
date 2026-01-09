import React from "react";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

const categories = [
    {id: 1, category: "Doors", image: `/assets/productline/Product-Image.png`},
    {id: 2, category: "HDF", image: `/assets/productline/Product-Image(1).png`},
    {id: 3, category: "HPL", image: `/assets/productline/Product-Image(2).png`},
    {id: 4, category: "Particle Board", image: `/assets/productline/Product-Image(3).png`},
]

const ProductLine = () => {
    return (
        <>
            <div
                className="flex flex-col gap-10 w-full h-fit lg:py-10 py-5 lg:px-20  ipad:px-10 px-5 2xl:max-w-[90rem]">

                {/* title */}
                <p className="lg:text-6xl ipad:text-5xl text-4xl font-bold">
                    Product <span className="text-[#5e73e1]">lineup</span>
                </p>

                {/*    categories line (large screen)*/}
                <div
                    className={`lg:flex hidden w-full justify-between mt-16`}
                >
                    {categories.map((item) => (
                        <div className={`h-[30rem] w-64  flex flex-col gap-2 relative`}
                             key={item.id}
                        >

                            {/*image*/}
                            <div className={`h-[70%] z-20`}>
                                {item?.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.category || "Category Image"}
                                        width={500}
                                        height={500}
                                        className={`w-full h-full`}
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>

                            {/*title*/}
                            <p className={`text-xl font-semibold`}>{item?.category}</p>

                            {/*serial no*/}
                            <p
                                className={`absolute top-[-3.2rem] text-7xl text-[#EEEDE9] font-bold text-stroke-black text-stroke-thin`}>
                                0{item.id}
                            </p>
                        </div>
                    ))}
                </div>

                {/*  categories line carousel (small screen)  */}
                <div
                    className={`lg:hidden flex w-full justify-between mt-2`}>
                    <Carousel
                        opts={{
                            align: "center",
                        }}
                        className="w-full md:max-w-3xl ipad:max-w-2xl max-w-xs relative"
                    >
                        <CarouselContent>
                            {categories.map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    className="ipad:basis-1/3 basis-1/2 ipad:h-[30rem] h-[25rem] flex flex-col justify-center gap-2 relative overflow-auto"
                                >

                                    {/*image*/}
                                    <div className={`h-[60%] z-20`}>
                                        {item?.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.category || "Category Image"}
                                                width={500}
                                                height={500}
                                                className={`w-full h-full`}
                                            />
                                        ) : (
                                            <p>No image available</p>
                                        )}
                                    </div>

                                    {/*title*/}
                                    <p className={`text-xl font-semibold`}>{item?.category}</p>

                                    {/*serial no*/}
                                    <p
                                        className={`absolute ipad:top-[2rem] top-[1rem] text-7xl text-[#EEEDE9] font-bold text-stroke-black text-stroke-thin`}>
                                        0{item.id}
                                    </p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className={`absolute top-0 left-0`}/>
                        <CarouselNext className={`absolute top-0  left-10`}/>

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default ProductLine;