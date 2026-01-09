import React from "react";
import NavBar from "./Navbar";
import ArrowRight from "../../public/assets/arrow-right.png";
import Image from "next/image";
// import { BsArrowRightShort } from 'react-icons/bs';
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative bg-hero bg-cover bg-no-repeat bg-left-top w-full h-[900px]">
      <div className="top-0 right-0 bottom-0 left-0 -z-5 absolute bg-black opacity-25 mix-blend-multiply" />
      <div className="relative">
        <div className="top-0 right-0 bottom-0 left-0 z-0 absolute bg-custom-nav-gradient opacity-60 mix-blend-multiply" />
        <div className="relative mx-auto container">
          <NavBar />
        </div>
      </div>

      <div className="z-10 mx-auto container bg-red-300 ">
        <div className="bottom-0 left-0 transform translate-y-3/4">
          <h1 className="max-w-[970px] lg:text-top">
            A trusted place for your multi-board needs.
          </h1>
          <Link
            href="/"
            className="inline-flex relative items-center gap-3 opacity-100 pt-10 pb-3 text-white text-xl leading-5"
          >
            <div className="bottom-hr" />
            <span>Inquiry now</span>
            <Image src={ArrowRight} alt="Picture of the author" />
            {/* <BsArrowRightShort /> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
