import React from "react";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

const categories = [
    {id: 1, category: "Residential Interiors", image: `/assets/HLP/CreatedToFit/1.png`},
    {id: 2, category: "Commercial Spaces", image: `/assets/HLP/CreatedToFit/2.png`},
    {id: 3, category: "Healthcare & Education", image: `/assets/HLP/CreatedToFit/3.png`},
    {id: 4, category: "Wall Cladding & Partitions", image: `/assets/HLP/CreatedToFit/4.png`},
]

const CreatedToFit = () => {
    return (
        <>
            <div
                className="flex flex-col gap-10 w-full h-fit lg:py-10 py-5 lg:px-20  ipad:px-10 px-5 2xl:max-w-[90rem]">

                {/* title */}
                <p className="lg:text-6xl ipad:text-5xl text-4xl font-bold">
                    Created to fit <br/> <span className="text-[#5e73e1]">your world</span>
                </p>

                {/*    categories line (large screen)*/}
                <div
                    className={`lg:flex hidden w-full justify-between mt-16`}
                >
                    {categories.map((item) => (
                        <div
                            className={`w-64 flex flex-col gap-2 relative ${item.id % 2 === 0 ? "h-[18rem]" : "h-[30rem] "}`}
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
                            <p className={`text-xl`}>{item?.category}</p>
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
                                    className={`ipad:basis-1/3 basis-1/2 
                                    ${item.id % 2 === 0 ? "ipad:h-[18rem] h-[14rem]" : "ipad:h-[30rem] h-[25rem]"}
                                     flex flex-col gap-2 relative overflow-auto pt-10`}
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
                                    <p className={`text-xl`}>{item?.category}</p>
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

export default CreatedToFit;