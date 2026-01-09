import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import Image from 'next/image';

import VideoLeft from '../../public/assets/thirdbanner/video.png';
import VideoRight from '../../public/assets/thirdbanner/image.png';


const ThirdBanner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 px-8 lg:px-36 mt-10 py-12 bg-[#EEEDE9]'>
            <div className='flex flex-col gap-y-12 justify-center'>
                <div className='text-3xl lg:text-5xl font-semibold'>
                    Order our products to build your dream.
                </div>
                {/*<div>*/}
                {/*    Query Now*/}
                {/*</div>*/}
                <div
                    className="self-start text-gray-600 flex flex-row items-center cursor-pointer group
                    hover:text-black">
                    <span className="relative group-hover:after:w-full
                           after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                           after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300">
                        Query Now
                    </span>
                    <BsArrowRight
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-y-4 gap-x-10'>
                <Image src={VideoRight}
                       alt="Our Category" className='rounded-lg aspect-video lg:aspect-square w-full'/>
                <Image src={VideoLeft}
                       alt="Our Category" className='rounded-lg aspect-video lg:aspect-square w-full'/>
            </div>
        </div>
        // <div className='bg-white'>
        //     <div className='bg-white py-[15px] container-bg'>
        //         <div className="flex justify-between py-[30px]">
        //             {/* left section  */}
        //             <div className='relative flex flex-col justify-between py-4'>
        //                 <h1 className='font-semibold text-5xl text-ctm-dark leading-[120%]'>Order our products to build
        //                     your dream.</h1>
        //                 <div
        //                     className='inline-flex flex-col gap-[10px] border-ctm-dark py-[10px] border-b-[1px] border-opacity-25 w-fit text-ctm-dark'>
        //                     <Link href="/" className='inline-flex items-center gap-[10px] opacity-75 text-xl leading-5'>
        //                         <span>Quiry now</span>
        //                         <BsArrowRightShort/>
        //                     </Link>
        //                 </div>
        //             </div>
        //             {/* right section */}
        //             <div className="flex gap-[20px]">
        //                 {/* left*/}
        //                 <div className='relative rounded-[5px] overflow-hidden'>
        //                     <div className="z-10 absolute inset-0 bg-overlay-black opacity-25 w-full h-full"/>
        //                     <div
        //                         className="top-[109px] left-[109px] z-20 absolute bg-ctm-sky opacity-40 filter-blur-30 w-[225px] h-[225px]"/>
        //                     <div className="top-5 right-5 z-30 absolute">
        //                         <Image src={Download}
        //                                alt="Our Category" className='justify-end'/>
        //                     </div>
        //                     <div className="bottom-[30px] left-5 z-30 absolute w-full text-left text-white">
        //                         <p className='opacity-50 text-sm'>Download</p>
        //                         <p className='text-2xl text-white'>Our catalog</p>
        //                     </div>
        //                     <Image src={VideoLeft}
        //                            alt="Our Category" className='w-[240px] h-[240px]'/>
        //                 </div>
        //                 {/* right  */}
        //
        //                 <div className='relative rounded-[5px] overflow-hidden'>
        //                     <div className="z-10 absolute inset-0 bg-overlay-linear-mix opacity-25 w-full h-full"/>
        //                     <div className="z-10 absolute inset-0 bg-overlay-linear-mix opacity-25 w-full h-full"/>
        //                     <div className="top-5 right-5 z-30 absolute">
        //                         <Image src={Play}
        //                                alt="Our Category" className='justify-end'/>
        //                     </div>
        //                     <div className="bottom-[30px] left-5 z-30 absolute w-full text-left text-white">
        //                         <p className='text-2xl text-white'>About BOARD</p>
        //                     </div>
        //                     <Image src={VideoRight}
        //                            alt="Our Category" className='w-[240px] h-[240px]'/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ThirdBanner