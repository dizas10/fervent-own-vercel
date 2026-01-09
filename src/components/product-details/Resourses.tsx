import React from "react";
import AccordianImageGrid from "@/components/re-usable/AccordianImageGrid";

const menuItems1 = [
    {title: "resources", fileName: "filename"},
    {title: "Catalog", fileName: "filename"},
];

const menuItems2 = [
    {title: "resources", fileName: "filename"},
];

const Decors = () => {

    return (
        <>
            <div
                className={`flex ipad:flex-row flex-col min-h-[60vh] w-full gap-10  justify-between py-5 ipad:px-10 lg:px-0`}>

                {/*accordion 1*/}
                <div className={`flex flex-col w-full`}>
                    <AccordianImageGrid data={menuItems1}/>
                </div>

                {/*accordion 2*/}
                <div className={`flex flex-col w-full ipad:px-5 lg:px-0`}>
                    <AccordianImageGrid data={menuItems2}/>
                </div>
            </div>
        </>
    )
}

export default Decors