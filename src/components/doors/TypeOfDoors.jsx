import React from "react";

const TypeOfDoors = () => {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-7 w-full py-10 lg:py-32 px-5 ipad:px-10 lg:px-20 gap-8'>


      <div className='col-span-4 flex flex-col justify-center gap-y-8 lg:px-20'>
        <div className='font-semibold text-5xl lg:text-7xl'>
          Type Of <span className='ml-4 text-blue-400'>doors</span></div>
        <div className=''>
          A flush door has a solid core particle board infill with a wooden rail and stile framed around it and
          sandwiched between an exterior grade HDF substrate on the top and bottom.
        </div>
      </div>
      <div className='col-span-3 flex justify-center items-center lg:pr-20'>
        <img src='/assets/doors/type_of_doors.png' alt='image' className='w-full max-h-[80vh]' width={null}/>
      </div>
    </div>
  );
}

export default TypeOfDoors;