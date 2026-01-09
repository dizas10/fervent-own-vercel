import React from "react";
import man_image from "@/assets/Image.png";

import {ArrowLeft, ArrowRight} from "lucide-react";
import Image from "next/image";

const OurMilestonesAbout = () => {
  return (
    <>
      <div className="my-20 flex flex-col">
        <h1 className="px-8 lg:px-32 text-6xl font-bold py-6 ">
          Our <span className=" text-[#00A5E3] ">Milestones</span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <Image
            src={man_image}
            alt="man_image"
            priority
            className="w-full aspect-square max-h-[90vh]"
          />
          <div className="flex flex-col justify-center px-8 lg:px-24">
            <div className=" w-full flex items-end justify-evenly gap-2 lg:gap-10 ">
              <h1 className=" font-bold text-5xl text-blue-500">2025</h1>
              <h1 className=" font-bold text-xl ">2024</h1>
              <h1 className=" font-bold text-xl ">2023</h1>
              <h1 className=" font-bold text-xl ">2022</h1>
              <h1 className=" font-bold text-xl ">2021</h1>
            </div>
            <div className="my-4 w-full border-t border-blue-500"></div>
            <h1 className="my-6 text-2xl font-bold ">
              A Legacy of Craftsmanship and Innovation
            </h1>
            <p className='my-6'>
              Founded with a passion for wood craftsmanship, MDF Muliboard
              Industries Ltd has grown into a trusted name in the industry.
              Our journey is marked by continuous improvement, innovative
              product development, and a steadfast commitment to customer
              satisfaction.
            </p>
            <div className="my-8 w-full flex items-center gap-6 lg:gap-10 text-[#00A5E3] ">
              <button>
                <ArrowLeft/>
              </button>
              <button>
                <ArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMilestonesAbout;
