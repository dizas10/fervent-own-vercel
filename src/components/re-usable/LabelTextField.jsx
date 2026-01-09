"use client"
import React from "react";

const LabelTextField = ({label, placeholder, className, children}) => {

  return (
    <div className={`w-full flex flex-col items-start justify-center gap-y-3 ${className}`}>
      <label htmlFor="name">{label}</label>
      {children ? children : (
        <input
          type='text'
          placeholder={placeholder}
          className="w-full h-[50px] p-2 rounded "
        />
      )}

    </div>
  );
};

export default LabelTextField;
