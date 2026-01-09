import React from "react";

const ImageSection = ({title, highlight, subtitle, imageSrc, children}) => {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full py-10 lg:py-32 px-5 ipad:px-10 lg:px-20 gap-8'>
      <div className='flex justify-center items-center lg:px-12'>
        <img src={imageSrc} alt='image' className='w-full max-h-[80vh]' width={null}/>
      </div>

      <div className='flex flex-col justify-center gap-y-8 lg:px-12'>
        <div className='font-semibold text-5xl lg:text-7xl break-words'>
          {title}
          <span className='ml-4 text-blue-400'>{highlight}</span> {subtitle}</div>
        <div className=''>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ImageSection;