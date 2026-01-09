"use client";
import {Plus, Minus, CopyCheck, FileSearch, SquareMousePointer} from "lucide-react";
import React from "react";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Categories = [
    {
        name: "MDF",
        id: 1,
        subCategory: [
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
        ]
    },
    {
        name: "HDF Flooring",
        id: 2,
        subCategory: [
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
        ]
    },
    {
        name: "Particle Board",
        id: 3,
        subCategory: [
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
        ]
    },
    {
        name: "HLP",
        id: 4,
        subCategory: [
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
        ]
    },
    {
        name: "Doors",
        id: 5,
        subCategory: [
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
            "MDF Board (Sheet Material)",
            "MR MDF Board",
            "VENEER MDF",
        ]
    },
];

const HDF = {
    name: "High Density Fibre",
    image: `/assets/hdf/HDF.png`,
    slug: "HDF Board"
}

const MDF = {
    name: "Medium Density Fibre",
    image: `/assets/hdf/MDF.png`,
    slug: "MDF Board",
}

const HLP = {
    name: "High-Pressure Laminate",
    image: `/assets/hdf/HPL.png`,
    slug: "HLP Board",
}

const Particle_Board = {
    name: "Particle Board",
    image: `/assets/hdf/Particle.png`,
    slug: "particle-board",
}

const Doors = {
    name: "Doors ",
    image: `/assets/hdf/Doors.png`,
    slug: "doors",
}

// component
const ProductRange = () => {
    const [selectedCategory, setSelectedCategory] = React.useState(1);
    const [cardProducts, setCardProducts] = React.useState(MDF)
    const [isHovered, setIsHovered] = React.useState(null)
    const [hoveredIndex, setHoveredIndex] = React.useState(null)
    const pathname = usePathname()

    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
        if (id === 1) {
            setCardProducts(MDF)
        } else if (id === 2) {
            setCardProducts(HDF)
        } else if (id === 3) {
            setCardProducts(Particle_Board)
        } else if (id === 4) {
            setCardProducts(HLP)
        } else if (id === 5) {
            setCardProducts(Doors)
        }
    };

    const handleHoverIn = (id, idx) => {
        setIsHovered(id)
        setHoveredIndex(idx)
        console.log(id)
    }

    const handleHoverOut = () => {
        setIsHovered(null)
    }

    React.useEffect(() => {
        if (pathname === '/hdf-flooring') {
            setSelectedCategory(2)
            setCardProducts(HDF)
        } else if (pathname === '/hpl') {
            setSelectedCategory(4)
            setCardProducts(HLP)
        } else if (pathname === '/mdf') {
            setSelectedCategory(1)
            setCardProducts(MDF)
        } else if (pathname === '/particle-board') {
            setSelectedCategory(3)
            setCardProducts(Particle_Board)
        }
    }, [])

    return (
        <>
            <div
                className="flex flex-col gap-10 w-full h-fit lg:py-10 py-5  lg:px-20 ipad:px-10 px-5  2xl:max-w-[90rem]">
                {/* title */}
                <p className="lg:text-6xl ipad:text-5xl text-4xl font-bold">
                    Product <span className="text-[#5e73e1]">range</span>
                </p>

                {/*sorting part*/}
                <div className={`flex justify-end w-full`}>
                    <div className={`flex flex-col gap-2 lg:w-[50%] ipad:w-[40%] w-full `}>
                        <p className={`text-xs`}>Sort by</p>
                        <select className={`border-2 rounded w-full text-xs p-3`}>
                            <option>Best Selling</option>
                            <option>Latest</option>
                        </select>
                    </div>
                </div>

                {/* Product container */}
                <div className="w-full flex gap-8">
                    {/* categories part */}
                    <div className="lg:flex flex-col gap-5 hidden w-[30%] h-fit">
                        <p className="text-xl font-semibold">Categories</p>

                        {/* filter */}
                        <ul className="flex flex-col">
                            {Categories.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => handleCategoryClick(item.id)}
                                    className={`py-3 text-sm border-b-2 border-b-[rgba(0,0,0,0.3)] flex flex-col justify-between cursor-pointer 
                                    ${
                                        selectedCategory === item.id
                                            ?
                                            "text-blue-500 max-h-[15rem] transition-all duration-200 ease-in-out"
                                            :
                                            "text-black max-h-[5rem]"
                                    }`}
                                >
                                    <div className={`w-full flex justify-between`}>
                                        <span
                                            className={`text-lg ${selectedCategory === item.id ? "mb-2" : "mb-0"}`}>{item.name}</span>
                                        {
                                            (selectedCategory === item.id) ? <Minus/> : <Plus/>
                                        }
                                    </div>

                                    {selectedCategory === item.id && item.subCategory.map((subItem, idx) => (
                                        <p key={idx} className={`text-sm text-[rgba(0,0,0,0.7)] mb-2`}>{subItem}</p>
                                    ))
                                    }

                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* product cards grid */}
                    <div className="w-[100%] grid grid-cols-12 lg:gap-5 gap-3 lg:w-[70%] h-fit">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="ipad:col-span-4 col-span-6 h-[25rem] flex flex-col"
                            >

                                {/*image*/}
                                <div className={`lg:h-[70%] h-[60%]`}>
                                    {cardProducts?.image ? (
                                        <Image
                                            src={cardProducts.image}
                                            alt={cardProducts.slug || "Product Image"}
                                            width={500}
                                            height={500}
                                            className='w-full h-full lg:px-10'
                                        />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                </div>

                                {/*    buttons + icons + text*/}
                                <div className={`lg:h-[30%] h-[40%]`}>

                                    {/*info text*/}
                                    <div className={`flex flex-col p-2 gap-1 h-1/2`}>
                                        <p className={`text-xs uppercase text-[rgba(0,0,0,0.5)]`}>{cardProducts?.slug}</p>
                                        <p className={`font-semibold`}>{cardProducts?.name}</p>
                                    </div>

                                    {/*icons*/}
                                    <div
                                        className={`h-1/2 flex flex-row items-center justify-between border-t-2 border-b-2`}>

                                        {/*compare*/}
                                        <div
                                            className={`flex flex-col h-full items-center justify-center gap-1 w-[33.3%] hover:text-white cursor-pointer relative overflow-hidden`}
                                            onMouseEnter={() => handleHoverIn(1, index)}
                                            onMouseLeave={() => handleHoverOut()}
                                        >
                                            <CopyCheck className={`z-10`}/>
                                            <span className={`text-xs z-10`}>Compare</span>

                                            {/*    overlay*/}
                                            <div className={`absolute h-full w-full
                                            ${isHovered === 1 && hoveredIndex === index ?
                                                "translate-y-0 bg-sub-hero transition-all duration-500 ease-in-out"
                                                :
                                                "translate-y-[100%] transition-all duration-500 ease-in-out"}`}></div>
                                        </div>

                                        {/*query*/}
                                        <div
                                            className={`flex flex-col h-full items-center justify-center gap-1 w-[33.3%] hover:text-white cursor-pointer relative overflow-hidden`}
                                            onMouseEnter={() => handleHoverIn(2, index)}
                                            onMouseLeave={() => handleHoverOut()}>
                                            <FileSearch className={`z-10`}/>
                                            <span className={`text-xs z-10`}>Query</span>

                                            {/*    overlay*/}
                                            <div className={`absolute h-full w-full
                                            ${isHovered === 2 && hoveredIndex === index ?
                                                "translate-y-0 bg-sub-hero transition-all duration-500 ease-in-out"
                                                :
                                                "translate-y-[100%] transition-all duration-500 ease-in-out"}`}></div>
                                        </div>

                                        {/*view*/}

                                        <Link
                                            href={{
                                                pathname: '/product-details',
                                                query: {id: `${index}`},
                                            }}
                                            className={`flex flex-col h-full items-center justify-center gap-1 w-[33.3%] hover:text-white cursor-pointer relative overflow-hidden`}
                                            onMouseEnter={() => handleHoverIn(3, index)}
                                            onMouseLeave={() => handleHoverOut()}>
                                            <SquareMousePointer className={`z-10`}/>
                                            <span className={`text-xs z-10`}>View</span>

                                            {/*    overlay*/}
                                            <div className={`absolute h-full w-full
                                            ${isHovered === 3 && hoveredIndex === index ?
                                                "translate-y-0 bg-sub-hero transition-all duration-500 ease-in-out"
                                                :
                                                "translate-y-[100%] transition-all duration-500 ease-in-out"}`}></div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* navigate more*/}
                <div></div>
            </div>
        </>
    );
};

export default ProductRange;
