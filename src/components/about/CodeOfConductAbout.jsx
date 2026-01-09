import React from "react";
import icon_1 from "@/assets/fi_17437326.png";
import icon_2 from "@/assets/fi_7857923.png";
import icon_3 from "@/assets/ranking 1.png";
import icon_4 from "@/assets/fi_7857952.png";
import icon_5 from "@/assets/fi_3131489.png";
import CodeOfConductSections from "@/components/about/CodeOfConductSections";

const WhyAreWeAbout = () => {
  return (
    <>
      <div className="mt-24 flex flex-col px-8 lg:px-32">
        <div className="w-full mb-10">
          <h1 className="text-5xl lg:text-6xl font-bold ">
            Code of <span className=" text-[#00A5E3] ">conduct</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-6'>
          <CodeOfConductSections title='Responsibility' image={icon_1} span={2} subtitle='We are committed to ethical
          decision-making, environmental sustainability, and social responsibility in all aspects of our business.'
                                 linkTitle='Download PDF' link=''/>
          <CodeOfConductSections title='Accountability' image={icon_2} span={1}/>
          <CodeOfConductSections title='Compliance' image={icon_3} span={1}/>
          <CodeOfConductSections title='Integrity' image={icon_4} span={1}/>
          <CodeOfConductSections title='Teamwork' image={icon_5} span={1}/>
        </div>
      </div>
    </>
  );
};

export default WhyAreWeAbout;
