import React from "react";
import Image from "next/image";

const WhyAreWeSections = ({title, subtitle, image}) => {
  return (
    <>
      <div className="flex items-center justify-start gap-x-4 w-full">
        {image && (
          <div className='flex items-center justify-center bg-[#213A59] rounded w-[80px] h-[80px]'>
            <Image src={image} alt={title} width={40} height={40}/>
          </div>
        )}

        <div className="flex flex-col w-full">
          <div className="text-lg font-semibold">{title}</div>
          <div className='break-words'>{subtitle}</div>
        </div>
      </div>
    </>
  );
}

export default WhyAreWeSections;