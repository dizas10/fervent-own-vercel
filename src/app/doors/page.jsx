"use client";

import React from "react";
import Hero from '../../components/re-usable/Hero'
import ThirdBanner from "@/pages/ThirdBanner";
import ProductLine from "@/components/re-usable/ProductLine";
import ImageSection from "../../components/doors/ImageSection";
import Features from "../../components/doors/Features";
import TypeOfDoors from "../../components/doors/TypeOfDoors";
import ProductRange from "../../components/re-usable/ProductRange";

const Page = () => {
  
  const commitmentCards = [
    {
      title: 'Eco-Friendly Materials',
      subtitle: 'Use of sustainable raw materials and low-emission resins.',
      imageSrc: '/assets/doors/eco_friendly.png',
    },
    {
      title: 'Energy-Efficient Production',
      subtitle: 'Adoption of energy-efficient technologies in our manufacturing processes.',
      imageSrc: '/assets/doors/energy.png',
    },
    {
      title: 'Recycling',
      subtitle: 'Incorporation of recycled materials to reduce waste and promote sustainability.',
      imageSrc: '/assets/doors/recycling.png',
    },
  ];
  return (
    <div>
      <Hero/>

      <div className="bg-[#EEEDE9] h-fit mt-16 flex flex-col items-center justify-center">
        <TypeOfDoors/>

        <ImageSection highlight='flash door' title='More about fervent'
                      imageSrc='/assets/doors/flash_door.png'
        >
          Our Laminated Doors with High-Pressure Laminate (HPL) surfaces combine style and strength to create doors that
          are not only visually appealing but also highly durable.
          <br/>
          <br/>
          These doors are designed to withstand heavy use while maintaining their attractive appearance, making them
          perfect for both high-traffic residential and commercial environments.
        </ImageSection>

        <Features/>

        <ImageSection highlight='laminated door' title='More about fervent'
                      imageSrc='/assets/doors/door1.png'
        >
          Our Laminated Doors with High-Pressure Laminate (HPL) surfaces combine style and strength to create doors that
          are not only visually appealing but also highly durable.
          <br/>
          <br/>
          These doors are designed to withstand heavy use while maintaining their attractive appearance, making them
          perfect for both high-traffic residential and commercial environments.
        </ImageSection>

        <ProductRange/>

        <ImageSection highlight='greener' p1='Our Laminated Doors with High-Pressure Laminate (HPL) surfaces combine style and strength to create doors that
          are not only visually appealing but also highly durable.'
                      p2='These doors are designed to withstand heavy use while maintaining their attractive appearance, making them
          perfect for both high-traffic residential and commercial environments.'
                      imageSrc='/assets/doors/commitment.png' title='Commitment to a' subtitle='world'
        >
          <div className='flex flex-col gap-y-12'>
            <div>
              At Fervent Muliboard Industries Ltd, we prioritize sustainability in our manufacturing processes.
              Our HPL panels are produced with eco-friendly materials and practices, ensuring minimal
              environmental impact.
            </div>
            <div className='h-full flex flex-col gap-y-8'>
              {commitmentCards.map((item) => (
                <div className='flex flex-row gap-x-4' key={item.title}>
                  <div className='w-20 h-20 rounded-full flex items-center justify-center'
                       style={{background: 'linear-gradient(134.73deg, rgba(33, 58, 89, 0.9) 20.87%, rgba(12, 100, 122, 0.9) 100%)'}}
                  >
                    <img src={item.imageSrc} alt={item.title} className='h-8 w-8'/>
                  </div>
                  <div className='w-full flex flex-col gap-y-2'>
                    <div className='text-xl font-bold'>{item.title}</div>
                    <div>{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ImageSection>

        <ProductLine/>
      </div>
      <ThirdBanner/>
    </div>
  );
};

export default Page;
