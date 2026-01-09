import Image from 'next/image'
import React from 'react'

import card1 from '../../public/assets/card/1.png';
import card2 from '../../public/assets/card/2.png';
import card3 from '../../public/assets/card/3.png';
import image from '../../public/assets/card/Image.png';


const FirstBanner = () => {
    return (
        <div className="relative bg-linear-sky backdrop-blur-[85px] overflow-visible mix-blend-normal">
            <div className="lg:right-0 ipad:top-0 lg:bottom-0 z-10 absolute bg-first-banner bg-contain
             bg-no-repeat bg-right-top w-full lg:h-[776px] transform lg:-translate-y-[23rem] ipad:-translate-y-[13rem] -translate-y-[8rem] ipad:-trans flex justify-end">
                <Image src={image} alt='Natural'
                       className={`lg:w-[36rem] ipad:w-[25rem] w-[15rem] lg:h-[50rem] ipad:h-[30rem] h-[20rem]`}/>
            </div>


            <div
                className='lg:-top-[238px] top-10 2xl:left-[300px] left-1/2 -translate-x-1/2 2xl:-translate-x-0 z-30 absolute flex lg:flex-row flex-col gap-[30px]'>
                <div className='b1-card-body bg-b1-card-body'>
                    <Image src={card1} alt='Natural'/>
                    <div>
                        <p className='text-2xl'>Natural Aesthetics</p>
                        <p className='opacity-60'>Our boards showcase wood&apos;s inherent beauty, offering a range of
                            finishes that celebrate nature&apos;s textures and patterns in your designs.</p>
                    </div>
                </div>
                <div className='b1-card-body bg-b1-card-body '>
                    <Image src={card2} alt='Natural'/>
                    <div>
                        <p className='text-2xl'>Sustainable Sourcing</p>
                        <p className='opacity-60'>Our MDF boards start with responsibly harvested wood, ensuring forests
                            thrive while we create. We balance resource use with environmental stewardship.</p>
                    </div>
                </div>
                <div className='b1-card-body bg-b1-card-body'>
                    <Image src={card3} alt='Natural'/>
                    <div>
                        <p className='text-2xl'>Eco-Friendly Production</p>
                        <p className='opacity-60'>Advanced manufacturing processes minimize waste and energy
                            consumption, reducing our carbon footprint without compromising on quality or
                            durability.</p>
                    </div>
                </div>
            </div>

            <div
                className='pt-[150px] pb-[136px] container-bg lg:h-[30rem] ipad:h-[95rem] h-[90rem] relative lg:static'>
                <div
                    className="flex flex-col lg:justify-center lg:items-start  lg:w-[40rem] ipad:w-[30rem] w-[20rem] text-white absolute lg:bottom-14 bottom-16 lg:right-[60%] right-1/2 translate-x-1/2">
                    <h1 className='text-header lg:text-6xl text-5xl ipad:font-bold'>
                        Where Quality Meets Sustainability
                    </h1>
                    <p className='mt-[30px] text-base'>Emphasise the transformation of raw materials into refined
                        products</p>
                </div>
            </div>
        </div>
    )
}

export default FirstBanner