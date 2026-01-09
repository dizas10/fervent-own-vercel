import Contact from "@/components/Contact/Contact";
import ContactInformation from "@/components/Contact/ContactInformation";
import Hero from "@/components/Contact/Hero";

const page = () => {
    return (
        <div>
            <Hero/>
            <ContactInformation/>
            <div className=" h-[100px] w-full bg-gradient-to-t from-[#FFFFFF] to-[#EEEDE9] "></div>
            <Contact/>
        </div>
    );
};

export default page;
