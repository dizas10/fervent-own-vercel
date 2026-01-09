import Image from "next/image";
import React from "react";
import union from "@/assets/Union.png";
import WhyAreWeSections from "@/components/about/WhyAreWeSections";
import innovation from "@/assets/about/innovation.png";
import quality from "@/assets/about/quality.png";
import reliabality from "@/assets/about/reliabality.png";
import sustainability from "@/assets/about/sustainability.png";

const OurValuesAbout = () => {
  return (
    <>
      <div className="mt-32 flex flex-col items-center justify-start px-8 lg:px-32">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
          <div className="w-full">
            <h1 className="text-5xl lg:text-6xl font-bold ">
              Our <span className=" text-[#00A5E3] ">values</span>
            </h1>
            <p className=" py-6 ">
              We believe in offering top-quality products, driving innovation,
              and being eco-friendly
            </p>
            <div className="w-full flex flex-col items-start gap-3">
              <WhyAreWeSections title='Quality' image={quality}
                                subtitle='We never compromise on the quality of our products.'/>
              <WhyAreWeSections title='Innovation' image={innovation}
                                subtitle='We are constantly innovating to bring the best solutions to our customers.'/>
              <WhyAreWeSections title='Sustainability' image={sustainability}
                                subtitle='We are committed to eco-friendly practices and materials.'/>
              <WhyAreWeSections title='Reliabality' image={reliabality}
                                subtitle='Explore our brand in action through application examples. From business cards to digital platforms, see how the brand comes to life.'/>
            </div>
          </div>

          <Image
            src={union}
            alt="union-image"
            priority
            className='w-full px-8'
          />
        </div>
      </div>

    </>
  );
};

export default OurValuesAbout;
