import React from "react";
import Image from "next/image";

const WhyAreWeAbout = ({title, subtitle, image, linkTitle, link, span}) => {
  return (
    <>
      <div
        className={`flex flex-col gap-y-4 justify-between border p-4 ${span === 2 ? 'col-span-1 lg:col-span-2' : 'col-span-1'}`}>
        <div className='bg-[#213A59] flex justify-center rounded h-[80px] w-[80px]'>
          <Image src={image} alt={title} width={40} height={40} className='object-contain'/>
        </div>
        <div>
          <div className='text-xl font-bold'>{title}</div>
          {subtitle && (
            <div className='text-gray-500 text-sm mt-2'>{subtitle}</div>
          )}
          {linkTitle && (
            <div className='mt-2 text-gray-500'>{linkTitle}</div>
          )}
          <div>{link}</div>
        </div>
      </div>
    </>
  );
};

export default WhyAreWeAbout;
