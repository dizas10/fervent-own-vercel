import {BsArrowRight} from "react-icons/bs";
import React from "react";


const SlideTextButton = ({title}) => {
  return (
    <div
      className="mt-10 text-gray-600 flex flex-row items-center cursor-pointer group
                    hover:text-black">
                    <span className="relative group-hover:after:w-full
                           after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                           after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300">
                        {title}
                    </span>
      <BsArrowRight
        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
      />
    </div>
  );
}

export default SlideTextButton;