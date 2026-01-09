import React from "react";

const OurFactorySections = ({title, subtitle, Icon}) => {
  return (
    <>
      <div className="">
        <div className=" w-full flex items-center ">
          <Icon className=" text-[#00A5E3]  "/>
          <h1 className=" pl-2 font-bold ">{title}:</h1>
        </div>
        <p dangerouslySetInnerHTML={{__html: subtitle}}></p>
      </div>
    </>
  );
}

export default OurFactorySections;
