"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import {BsArrowRightShort} from "react-icons/bs";
import slider1 from "../../public/assets/news/1.png";
import {Swiper, SwiperSlide} from "swiper/react";

const NewsAndEvent = () => {
    return (
        <>
            <div className="bg-gradient-to-t from-ctm-yellow-dark to-white h-[200px]"/>
            <div className="relative bg-ctm-yellow-dark mb-20 px-8 lg:px-36">
                <div
                    className="flex flex-col lg:flex-row gap-x-12 gap-y-6 justify-between lg:mx-24 text-white text-center">
                    <div className='h-[300px] w-full flex flex-col justify-between p-10'
                         style={{
                             background: 'linear-gradient(134.73deg, rgba(33, 58, 89, 0.9) 20.87%, rgba(12, 100, 122, 0.9) 100%)',
                         }}>
                        <div className='text-6xl font-bold'>
                            4 years
                        </div>
                        <div className='self-end'>
                            Experience
                        </div>
                    </div>
                    <div className='h-[300px] w-full flex flex-col justify-between p-10'
                         style={{
                             background: 'linear-gradient(134.73deg, rgba(33, 58, 89, 0.9) 20.87%, rgba(12, 100, 122, 0.9) 100%)',
                         }}>
                        <div className='text-6xl font-bold'>
                            160+
                        </div>
                        <div className='self-end'>
                            Products
                        </div>
                    </div>
                    <div className='h-[300px] w-full flex flex-col justify-between p-10'
                         style={{
                             background: 'linear-gradient(134.73deg, rgba(33, 58, 89, 0.9) 20.87%, rgba(12, 100, 122, 0.9) 100%)',
                         }}>
                        <div className='text-6xl font-bold'>
                            3M+
                        </div>
                        <div className='self-end'>
                            cbm Production
                        </div>
                    </div>
                </div>
                {/* news slider header*/}
                <div className="mt-40 pb-10">
                    <div className="flex flex-col lg:flex-row justify-between text-ctm-dark">
                        <h1 className="font-semibold text-5xl lg:text-7xl">News & events</h1>
                        <Link
                            href="/"
                            className="inline-flex relative items-center gap-[10px] opacity-75 pt-10 pb-3 text-xl leading-5"
                        >
                            <div className="bottom-hr border-ctm-dark"/>
                            <span>Explore now</span>
                            <BsArrowRightShort/>
                        </Link>
                    </div>
                </div>

                {/* Slider  */}
                <div className="mt-4 lg:mt-10">
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
                        {Array.from({length: 5}, (_, index) => index + 1).map((num) => (
                            <SwiperSlide className="w-full" key={num + 10}>
                                <Image src={slider1} alt="Slider" className="rounded-[5px]"/>
                                <div className="pt-6">
                                    <div className="text-blue-700 mb-[10px] text-[14px] text-ctm-sky leading-5">
                                        12 Oct 2024
                                    </div>
                                    <p className="mb-6 text-black text-xl leading-[32px]">
                                        BOARD pioneers contemporary designs for modern living
                                    </p>
                                    <Link
                                        href="/"
                                        className="inline-flex relative items-center gap-[10px] opacity-75 pb-3 text-xl leading-5"
                                    >
                                        <div className="bottom-hr border-ctm-dark"/>
                                        <span>Read More</span>
                                        <BsArrowRightShort/>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/*<div className="bg-gradient-to-b from-ctm-yellow-dark to-white h-[160px]"/>*/}
        </>
    );
};

export default NewsAndEvent;
