import React from "react";
import {Clock9, MapPin, MapPinned, Phone} from "lucide-react";
import OurFactorySections from "@/components/about/OurFactorySections";


const OurFactoryAbout = () => {
  return (
    <>
      <div className="w-full p-8 lg:p-32 flex items-center justify-center ">
        <div className="order-first lg:order-last w-full grid grid-cols-1 lg:grid-cols-2 gap-20 ">
          <div className="max-h-[600px] flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3651.217253877975!2d90.4230604747927!3d23.775276787821966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s6th%20Floor%2C%20Icon%20Center%2C%2057%2F4%2C%20Progoti%20Shoroni%20Vatara%2C%20Dhaka%201229!5e0!3m2!1sen!2sbd!4v1733027005878!5m2!1sen!2sbd"
              width="600"
              height="550"
              style={{border: "0"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-[500px] h-[550px] "
            ></iframe>
          </div>
          <div className="order-last lg:order-first flex flex-col items-start gap-4 ">
            <h1 className=" text-4xl font-bold ">
              Our
              <span className=" text-blue-400 "> factory</span>
            </h1>
            <p className='text-gray-600'>
              We have dealer’s all over in the country and around the glove,
              supporting us with every requirements.
            </p>
            <div className=" w-full flex flex-col items-start gap-6 ">
              <OurFactorySections title='Located in' subtitle='Al Amin Icon Center' Icon={MapPin}/>
              <OurFactorySections title='Address' Icon={MapPinned}
                                  subtitle='6th Floor, Icon Center, 57/4 <br/> Progoti Shoroni Vatara, Dhaka 1229'/>
              <OurFactorySections title='Hours' subtitle='9:30 AM (Sat - Thu)' Icon={Clock9}/>
              <OurFactorySections title='Phone' subtitle='+880 1888-826300' Icon={Phone}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurFactoryAbout;
