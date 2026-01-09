import Image from "next/image";
import React from "react";
import board2 from "@/assets/multiboard/board-2.png";
import board3 from "@/assets/multiboard/board-3.png";
import board4 from "@/assets/multiboard/board-4.png";
import board1 from "@/assets/multiboard/board-1.png";
import multiboard from "@/assets/multiboard/multiboard.png";
import SlideTextButton from "@/components/SlideTextButton";

const MultiBoard = () => {
  let images = [
    board4,
    board3,
    board2,
    board1,
  ]
  return (
    <div className="mt-20 px-8 lg:px-32">
      <div className="font-semibold text-4xl lg:text-7xl mb-20">
        Expect elegance with<br/>
        <span className="text-[#00A5E3]">Fervent’s</span> multi-boards
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div className="flex flex-col  items-start justify-start gap-4">
          <div className="flex flex-row lg:flex-col items-center gap-4">
            {images.map((src, index) => (
              <Image src={src} alt={''} key={index + 'board-img'}/>
            ))}
          </div>


          <div className="mt-10 text-2xl font-bold">Superior Durability</div>
          <div>Enjoy a long-lasting performance. Our boards are designed to withstand everyday wear and tear.</div>
          <SlideTextButton title='Explore More'></SlideTextButton>
        </div>
        <div>
          <Image src={multiboard} alt='multiboard'/>
        </div>
      </div>
    </div>
  );
};

export default MultiBoard;
