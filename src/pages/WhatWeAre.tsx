"use client";
import React from 'react'
// import Swiper core and required modules
import {Swiper, SwiperSlide} from 'swiper/react';

import dummy1 from "../../public/assets/whyAreWe/Isolation_Mode.svg";
import dummy2 from "../../public/assets/whyAreWe/Isolation_Mode (1).svg";
import dummy3 from "../../public/assets/whyAreWe/Group 1000004691.svg";
import dummy4 from "../../public/assets/whyAreWe/layer1.svg";
import Image from "next/image";

const WhatWeAre = () => {
    const dummy = [
        {
            title: "Quality",
            subtitle: "Assurance",
            description: "Quality Assurance ensures excellence through continuous checks and reliability.",
            imgSrc: dummy1,
        },
        {
            title: "24/7",
            subtitle: "Production",
            description: "24/7 Production delivers uninterrupted operations, ensuring timely output and efficiency.",
            imgSrc: dummy2,
        },
        {
            title: "Advanced",
            subtitle: "Facilities",
            description: "Advanced Facilities Advanced Facilities provide cutting-edge technology and resources for optimal performance & innovation.",
            imgSrc: dummy3,
        },
        {
            title: "Customer-Centric",
            subtitle: "Approach",
            description: "Customer-Centric Approach prioritizes client needs, ensuring tailored solutions & exceptional service.",
            imgSrc: dummy4,
        }
    ]
    return (
        <div className="bg-linear-sky backdrop-blur-[35px] mix-blend-normal">
            <div className='px-8 lg:px-36 py-12 lg:py-32'>
                <div className='text-5xl lg:text-7xl font-semibold flex flex-col gap-y-4'>
                    <div className='text-white'>Why are we</div>
                    <div className='text-blue-500'>different</div>
                </div>

                <div className='mt-12 max-w-96 text-white font-medium'>
                    At FERVENT, we redefine excellence in multi-board manufacturing. Reliability, quality, and
                    innovation - we are the complete package of everything!
                </div>
                <div className="mt-10">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        breakpoints={{
                            320: { // For small screens like mobile devices
                                slidesPerView: 1,
                            },
                            640: { // For tablets and small screens
                                slidesPerView: 2,
                            },
                            1024: { // For medium screens like laptops
                                slidesPerView: 3,
                            },
                            1280: { // For larger screens like desktops
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {dummy.map((data, index) => (
                            <SwiperSlide className="w-full" key={index}>
                                <div className='px-6 py-8 text-white border rounded min-h-[328px]'
                                     style={{
                                         border: '1px solid #EEEDE980',
                                         background: 'linear-gradient(134.73deg, rgba(33, 58, 89, 0.8) 20.87%, rgba(12, 100, 122, 0.8) 100%)',
                                     }}>
                                    <Image className='mb-4' src={data.imgSrc} alt={data.title}/>
                                    <div className='text-xl'>
                                        {data.title}
                                    </div>
                                    <div className='text-xl'>
                                        {data.subtitle}
                                    </div>
                                    <div className="w-full border-t border-white my-4"></div>
                                    <div className='text-lg'>
                                        {data.description}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default WhatWeAre