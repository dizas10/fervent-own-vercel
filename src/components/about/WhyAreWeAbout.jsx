import Image from "next/image";
import imageHero from "../../assets/image (1).png";
import React from "react";

const WhyAreWeAbout = () => {
  return (
    <>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-8 lg:px-32'>
        <div className='w-full flex justify-center'>
          <Image
            src={imageHero}
            alt="image"
            priority
            className="object-contain w-full h-full max-h-[600px]"
          />
        </div>

        <div className="w-full h-full flex flex-col items-start justify-center">
          <div className="text-[#002331] text-4xl lg:text-6xl font-bold">
            Why are we <br/>
            <span className=" text-[#00A5E3] ">different?</span>
          </div>
          <div className="mt-6 break-words flex">
            Fervent has been the front-runner in applying innovation at work. This
            simple philosophy has been the cornerstone of all our processes
            and technologies. It has led us to design and deliver contemporary
            lifestyle statements that have become synonymous with modern
            living.
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyAreWeAbout;
