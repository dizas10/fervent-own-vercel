import Image from 'next/image';

import Logo from '../../public/assets/logo/logo.png';

import Link from 'next/link';
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';
import React from "react";


const Footer = () => {
    return (
        <div className='bg-linear-sky backdrop-blur-35 mix-blend-normal'>
            <div className="flex flex-col lg:flex-row">
                {/* Left  Section*/}
                <div className='relative lg:max-w-[25%]'>
                    <video
                        autoPlay
                        loop
                        muted
                        className='w-full h-full object-cover'
                    >
                        <source src="/videos/footer_video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    {/*<Image src={FooterLeft} alt="Our Category" className='aspect-video lg:aspect-auto w-full h-full'/>*/}
                    <div className="absolute inset-0 flex flex-col justify-between p-10 pb-[46px]">
                        <Image src={Logo} alt='logo'/>
                        <div className='text-white'>
                            <p className='mb-4 text-sm'>Follow us</p>
                            <div className='flex gap-[27px]'>
                                <Link href=""><FaFacebook size={20}/></Link>
                                <Link href=""><FaLinkedin size={20}/></Link>
                                <Link href=""><FaTwitter size={20}/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right  Section*/}
                <div className='py-[40px] px-12 lg:px-24 w-full h-full'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-8 mb-[30px]'>
                        {/* section 1 */}
                        <div className='text-white'>
                            <p className='mb-[15px] text-base leading-[26px]'>About</p>
                            <div className='flex flex-col gap-[10px] opacity-75 text-sm'>
                                <Link className='hover:underline' href="/about">About us</Link>
                                <Link className='hover:underline' href="/mission-vision">Mission & Vision</Link>
                                <Link className='hover:underline' href="/board-of-directors">Directors</Link>
                            </div>
                        </div>
                        {/* section 2 */}
                        <div className='text-white'>
                            <p className='mb-[15px] text-base leading-[26px]'>Products</p>
                            <div className='flex flex-col gap-y-[10px] opacity-75 text-sm'>
                                <Link className='hover:underline' href="/mdf">MDF</Link>
                                <Link className='hover:underline' href="/hdf-flooring">HDF Flooring</Link>
                                <Link className='hover:underline' href="/particle-board">Particle Board</Link>
                                <Link className='hover:underline' href="/hpl">HPL</Link>
                                <Link className='hover:underline' href="/doors">Doors</Link>
                                <Link className='hover:underline' href="">All Products</Link>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className='text-white'>
                            <p className='mb-[15px] text-base leading-[26px]'>About</p>
                            <div className='flex flex-col gap-y-[10px] opacity-75 text-sm'>
                                <Link className='hover:underline' href="/contact">Contact</Link>
                                <Link className='hover:underline' href="/contact">Contact Us</Link>
                                <Link className='hover:underline' href="">Career</Link>
                                <Link className='hover:underline' href="/query">Product Query</Link>
                            </div>
                        </div>

                        {/* section 4 */}
                        <div className='text-white'>
                            <p className='mb-[15px] text-base leading-[26px]'>Resources</p>
                            <div className='flex flex-col gap-y-[10px] opacity-75 text-sm'>
                                <Link className='hover:underline' href="">Application</Link>
                                <Link className='hover:underline' href="">Installation Instructions</Link>
                                <Link className='hover:underline' href="">House builder Support</Link>
                                <Link className='hover:underline' href="">Merchants</Link>
                                <Link className='hover:underline' href="">Architect Resources</Link>
                                <Link className='hover:underline' href="">Case Studies</Link>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom copyright */}
                    <div
                        className="flex flex-col lg:flex-row lg:justify-between lg:items-center
                        opacity-75 mt-4 lg:mt-14 text-white text-xs">
                        <div>&copy;2024 BOARD multiboard industries LTD.</div>
                        <div>
                            Crafted by
                            <Link className='ml-1 hover:underline' href="https://brandmyth.agency/"
                                  target="_blank">Brandmyth</Link>
                        </div>
                        <div className='flex flex-row items-center gap-[10px]'>
                            <Link className='hover:underline' href="">
                                Terms and Conditions
                            </Link>
                            <div className='text-[#B2BBBE] text-xl'>•</div>
                            <Link className='hover:underline' href="Privacy Policy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
                {/* Right Top  */}
            </div>
        </div>
    )
}

export default Footer