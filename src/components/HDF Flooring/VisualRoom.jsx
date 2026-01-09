"use client";
import Image from "next/image";
import React from 'react';

const imageList = [
  `/assets/VisualRoom/1.jpg`,
  `/assets/VisualRoom/2.jpg`,
  `/assets/VisualRoom/3.png`,
  `/assets/VisualRoom/4.jpg`,
  `/assets/VisualRoom/5.jpg`,
]

const VisualRoom = () => {
  const [selectedImgId, setSelectedImgId] = React.useState(2)
  const [isFading, setIsFading] = React.useState(false);

  // Handle image select
  function ClickedImage(id) {
    if (id === selectedImgId) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedImgId(id);
      setIsFading(false);
    }, 300);
  }

  return (
    <>
      <div
        className="flex flex-col gap-10 w-full h-fit lg:py-10 py-5">

        {/* container*/}
        <div className={`w-full lg:h-screen ipad:h-[60vh] h-[60vh] bg-[rgba(0,0,0,0.5)] relative border`}>

          {/*    big Image*/}
          <Image
            src={imageList[selectedImgId]}
            alt={'img'}
            width={500}
            height={500}
            className={`w-full h-full absolute 
                        ${isFading ? "opacity-0" : "opacity-100 transition-all duration-300 ease-in"}
                        `}
          />

          {/*    image grid*/}
          <div
            className={`2xl:w-36 ipad:w-28 w-full lg:h-[70%] ipad:h-[70%] h-[20%] ipad:top-1/2 ipad:-translate-y-1/2 bottom-5 ipad:left-[90%] left-1/2 -translate-x-1/2 
                        flex ipad:flex-col flex-row gap-2 items-center justify-between rounded-lg
                         absolute p-2 right-10 bg-[rgba(255,255,255,0.8)]`}
          >
            {imageList.map((item, idx) => (
              <Image
                src={item}
                key={idx}
                alt={'img'}
                width={100}
                height={100}
                className={`w-full h-full rounded-xl cursor-pointer hover:border-2
                                 hover:border-[blue] transition-all duration-200 ease-in 
                                 ${idx === selectedImgId ? "border-2 border-[blue]" : ""}
                                 `}
                onClick={() => ClickedImage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default VisualRoom