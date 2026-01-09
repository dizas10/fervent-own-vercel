"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import Logo from "../../public/assets/logo.png";

const Navbar = () => {
    const pathname = usePathname();

    const [bgColorChange, setBgColorChange] = React.useState(false);
    const [productOpen, setProductOpen] = React.useState(false);

    // mobile states
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [mobileProductOpen, setMobileProductOpen] = React.useState(false);

    React.useEffect(() => {
        if (
            pathname === "/hdf-flooring" ||
            pathname === "/hpl" ||
            pathname === "/mdf" ||
            pathname === "/particle-board" ||
            pathname === "/product-details" ||
            pathname === "/doors"
        ) {
            setBgColorChange(true);
        } else {
            setBgColorChange(false);
        }
    }, [pathname]);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav
                className={`relative top-0 w-full lg:h-[110px] h-[5rem] text-white flex items-center justify-between lg:px-24 px-5 z-50
        ${bgColorChange ? "bg-[#002A3A]" : "bg-transparent"}`}
            >
                {/* DESKTOP LEFT */}
                <ul className="w-full lg:flex items-center justify-start gap-6 hidden">
                    <li>
                        <Link href="/">Company</Link>
                    </li>

                    {/* DESKTOP PRODUCTS */}
                    <li
                        className="relative"
                        onMouseEnter={() => setProductOpen(true)}
                        onMouseLeave={() => setProductOpen(false)}
                    >
                        <button className="flex items-center gap-1">
                            Products
                            {productOpen ? <IoChevronUp /> : <IoChevronDown />}
                        </button>

                        <div className="absolute left-0 top-full w-full h-6" />

                        <div
                            className={`absolute left-0 top-[calc(100%+1.5rem)] w-64 rounded-md bg-[#002A3A] shadow-xl
              transition-all duration-300 ease-out
              ${
                                productOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                            }`}
                        >
                            <ul className="text-sm">
                                <li className="px-5 py-2 hover:bg-white/10">
                                    <Link href="/mdf">MDF</Link>
                                </li>
                                <li className="px-5 py-2 hover:bg-white/10">
                                    <Link href="/hdf-flooring">HDF Flooring</Link>
                                </li>
                                <li className="px-5 py-2 hover:bg-white/10">
                                    <Link href="/particle-board">Particle Board</Link>
                                </li>
                                <li className="px-5 py-2 hover:bg-white/10">
                                    <Link href="/hpl">HPL</Link>
                                </li>
                                <li className="px-5 py-3 hover:bg-white/10">
                                    <Link href="/doors">Doors</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link href="/">LookBook</Link>
                    </li>
                </ul>

                {/* LOGO */}
                <div className="w-1/2 lg:w-fit">
                    <Image src={Logo} alt="logo" className="lg:w-[25rem] w-[10rem]" />
                </div>

                {/* MOBILE TOGGLE */}
                <div className="w-1/2 flex justify-end lg:hidden">
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="p-2 rounded-md bg-white/10"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* DESKTOP RIGHT */}
                <ul className="w-full lg:flex items-center justify-end gap-6 hidden">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/mission-vision">Mission Vision</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`fixed inset-0 bg-[#002A3A] text-white z-[999]
        transition-transform duration-300 ease-out
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 h-[5rem]">
                    <Image src={Logo} alt="logo" className="w-[10rem]" />
                    <button onClick={() => setMobileOpen(false)}>
                        <X className="w-7 h-7" />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col px-6 gap-4 text-lg">
                    <li>
                        <Link onClick={() => setMobileOpen(false)} href="/about">
                            About Us
                        </Link>
                    </li>

                    {/* MOBILE PRODUCTS ACCORDION */}
                    <li>
                        <button
                            onClick={() => setMobileProductOpen(!mobileProductOpen)}
                            className="flex items-center justify-between w-full"
                        >
                            Products
                            {mobileProductOpen ? <IoChevronUp /> : <IoChevronDown />}
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300
              ${mobileProductOpen ? "max-h-96 mt-3" : "max-h-0"}`}
                        >
                            <ul className="flex flex-col gap-3 pl-4 text-base text-gray-200">
                                <li><Link href="/mdf" onClick={() => setMobileOpen(false)}>MDF</Link></li>
                                <li><Link href="/hdf-flooring" onClick={() => setMobileOpen(false)}>HDF Flooring</Link></li>
                                <li><Link href="/particle-board" onClick={() => setMobileOpen(false)}>Particle Board</Link></li>
                                <li><Link href="/hpl" onClick={() => setMobileOpen(false)}>HPL</Link></li>
                                <li><Link href="/doors" onClick={() => setMobileOpen(false)}>Doors</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link onClick={() => setMobileOpen(false)} href="/mission-vision">
                            Mission & Vision
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setMobileOpen(false)} href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
