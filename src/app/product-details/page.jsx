"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Charecteristics from "@/components/product-details/Charecteristics";
import Decors from "@/components/product-details/Decor";
import Resourses from "@/components/product-details/Resourses";
import RelatedProducts from "@/components/product-details/RelatedProduct";
import Inspirations from "@/components/product-details/Inspirations";
import ThirdBanner from "@/pages/ThirdBanner";

const imageList = [
  `/assets/VisualRoom/1.jpg`,
  `/assets/VisualRoom/2.jpg`,
  `/assets/VisualRoom/3.png`,
  `/assets/VisualRoom/4.jpg`,
  `/assets/VisualRoom/5.jpg`,
];

const toggleMenuList = [
  {name: "Characteristics", id: 1},
  {name: "Decors", id: 2},
  {name: "Related Products", id: 3},
  {name: "Inspirations", id: 4},
  {name: "Resources", id: 5},
];

// Utility function to detect touch devices
function isTouchDevice() {
  if (typeof window !== "undefined") {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  return false; // Default value for server-side
}

const Page = () => {
  const [selectedImgId, setSelectedImgId] = React.useState(2);
  const [selectedItem, setSelectedItem] = React.useState(toggleMenuList[0].name);
  const [isFading, setIsFading] = React.useState(false);
  const [isClickedId, setIsClickedId] = React.useState(1);
  const [isHoveredId, setIsHoveredId] = React.useState(1);

  // Handle image select
  function ClickedImage(id) {
    if (id === selectedImgId) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedImgId(id);
      setIsFading(false);
    }, 300);
  }

  // Handle toggle menu click
  function toggleMenuClick(id) {
    setIsClickedId(id);
  }

  // Handle toggle menu hover (only on non-touch devices)
  function toggleMenuHoveredIn(id) {
    if (!isTouchDevice()) {
      setIsHoveredId(id);
    }
  }

  function toggleMenuHoveredOut() {
    if (!isTouchDevice()) {
      setIsHoveredId(0);
    }
  }


  return (
    <>
      <div
        className={`min-h-[60vh] bg-[#EEEDE9] flex flex-col gap-10 items-center justify-center lg:py-5 w-full lg:px-24`}
      >
        {/* Primary details + image gallery */}
        <div className={`flex lg:flex-row flex-col-reverse 2xl:max-w-[90rem] gap-10`}>

          {/* Details section */}
          <div className={`flex flex-col gap-5 lg:w-1/2 w-full lg:px-0 ipad:px-10 px-5 `}>

            {/*product title*/}
            <p className={`lg:text-4xl text-3xl font-semibold tracking-wider`}>
              Melamine Faced PB
            </p>

            {/*product code*/}
            <p className={`text-xs bg-[rgba(0,0,0,0.1)] w-fit p-1 rounded-full text-black`}>
              SKU:SM3673
            </p>

            {/*description*/}
            <p className={`text-sm text-[rgba(0,0,0,0.7)] leading-6`}>
              MF PB is a standard board and an essential material in the furniture and interior
              design industries. Made from particleboard covered with a decorative paper
              impregnated with melamine resin, it’s the most widely used material for modern
              furniture and is available in various finishes, including gloss, matt, lightly
              textured and wood grain.
            </p>

            {/*    features icons tray*/}
            <div className={`flex flex-col gap-5`}>
              <p className={`text-xl font-bold`}>Features</p>

              {/*    icons*/}
              <div className={`flex gap-5`}>
                <Image
                  src={`/assets/ProductDetailsPage/icons/1.png`}
                  alt={"Category Image"}
                  width={100}
                  height={100}
                  className={`w-14 h-14`}
                />

                <Image
                  src={`/assets/ProductDetailsPage/icons/2.png`}
                  alt={"Category Image"}
                  width={100}
                  height={100}
                  className={`w-14 h-14`}
                />

                <Image
                  src={`/assets/ProductDetailsPage/icons/3.png`}
                  alt={"Category Image"}
                  width={100}
                  height={100}
                  className={`w-14 h-14`}
                />
              </div>
            </div>

            {/*    application icons tray*/}
            <div className={`flex flex-col gap-5`}>
              <p className={`text-xl font-bold`}>Application</p>

              {/*    icons*/}
              <div className={`flex gap-5`}>
                <Image
                  src={`/assets/ProductDetailsPage/icons/4.png`}
                  alt={"Category Image"}
                  width={100}
                  height={100}
                  className={`w-14 h-14`}
                />

                <Image
                  src={`/assets/ProductDetailsPage/icons/5.png`}
                  alt={"Category Image"}
                  width={100}
                  height={100}
                  className={`w-14 h-14`}
                />
              </div>
            </div>

            {/*    social icons tray*/}
            <div className={`flex flex-col gap-3`}>
              <p className={`text-sm`}>Share:</p>

              {/*    icons*/}
              <div className={`flex gap-5`}>
                <Link
                  href={"#"}
                  className={`w-5 h-5`}
                >
                  <Image
                    src={`/assets/socials-icon/Facebook.png`}
                    alt={"Category Image"}
                    width={50}
                    height={50}
                    className={`w-5 h-5`}
                  />
                </Link>

                <Link
                  href={"#"}
                  className={`w-5 h-5`}
                >
                  <Image
                    src={`/assets/socials-icon/instagram.png`}
                    alt={"Category Image"}
                    width={50}
                    height={50}
                    className={`w-5 h-5`}
                  />
                </Link>

                <Link
                  href={"#"}
                  className={`w-5 h-5`}
                >
                  <Image
                    src={`/assets/socials-icon/linkedin.png`}
                    alt={"Category Image"}
                    width={50}
                    height={50}
                    className={`w-5 h-5`}
                  />
                </Link>

                <Link
                  href={"#"}
                  className={`w-5 h-5`}
                >
                  <Image
                    src={`/assets/socials-icon/X.png`}
                    alt={"Category Image"}
                    width={50}
                    height={50}
                    className={`w-5 h-5`}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/*    div 2 (image gallery)*/}
          <div
            className={`lg:w-1/2  w-full flex flex-col lg:h-full ipad:h-[40vh] h-[60vh] lg:bg-[rgba(0,0,0,0.5)] ipad:bg-inherit bg-[rgba(0,0,0,0.5)]
                         lg:px-0  mx-0 ipad:px-28`}>

            {/*    big Image*/}
            <Image
              src={imageList[selectedImgId]}
              alt={'img'}
              width={500}
              height={500}
              className={`w-full h-full  
                        ${isFading ? "lg:opacity-0 opacity-0 ipad:opacity-30" : "opacity-100 transition-all duration-300 ease-in"}
                        `}
            />

            {/*    image grid*/}
            <div
              className={`w-full h-[20%] bg-white
                        flex gap-2 items-center justify-between 
                         p-2`}
            >
              {imageList.map((item, idx) => (
                <Image
                  src={item}
                  key={idx}
                  alt={'img'}
                  width={100}
                  height={100}
                  className={`w-full h-full rounded cursor-pointer hover:border-2
                                 hover:border-[blue] transition-all duration-200 ease-in 
                                 ${idx === selectedImgId ? "border-2 border-[blue]" : ""}
                                 `}
                  onClick={() => ClickedImage(idx)}
                />
              ))}
            </div>
          </div>
        </div>


        {/* Toggle menu (specifications) */}
        <div className={`flex flex-col min-h-[40vh] w-full`}>

          {/* Toggle menu (large screen) */}
          <div className={`ipad:flex flex-col items-center hidden`}>
            <ul className={`flex ipad:w-[90%] lg:w-full`}>
              {toggleMenuList.map((item) => (
                <li
                  key={item.id}
                  className={`w-[15rem] lg:text-lg text-sm border-b border-b-[rgba(0,0,0,0.1)] cursor-pointer relative overflow-hidden 
                                    ${item.id !== 5 ? "border-r border-r-[rgba(0,0,0,0.1)]" : ""} flex items-center justify-center
                                     p-2 ${isClickedId === item.id || (!isTouchDevice() && isHoveredId === item.id) ? "text-white" : ""} 
                                     transition-all duration-500 ease-in-out`}
                  onClick={() => toggleMenuClick(item.id)}
                  onMouseEnter={() => toggleMenuHoveredIn(item.id)}
                  onMouseLeave={toggleMenuHoveredOut}
                >
                  <span className={`z-10`}>{item.name}</span>
                  <span
                    className={`absolute ${
                      isClickedId === item.id || (!isTouchDevice() && isHoveredId === item.id)
                        ? "bg-sub-hero translate-y-0 w-full h-full"
                        : "translate-y-[100%]"
                    } transition-all duration-500 ease-in-out`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>

          {/*toggle menu (mobile screen)*/}
          <div className={`flex flex-col items-center  ipad:hidden w-full px-5`}>
            <Select value={selectedItem} onValueChange={setSelectedItem}>
              <SelectTrigger className="w-full bg-sub-hero text-white text-lg ">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select below</SelectLabel>
                  {toggleMenuList.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={item.name}
                      className={`text-lg`}
                      onClick={() => toggleMenuClick(item.id)}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/*    information/toggle list*/}
          <div className={`w-full `}>
            {isClickedId === 1 ? (
              <Charecteristics/>
            ) : isClickedId === 2 ? (
              <Decors/>
            ) : isClickedId === 3 ? (
              <RelatedProducts/>
            ) : isClickedId === 4 ? (
              <Inspirations/>
            ) : (
              <Resourses/>
            )
            }
          </div>
        </div>
        <ThirdBanner/>
      </div>

    </>
  );
};

export default Page;
