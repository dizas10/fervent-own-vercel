import React from "react";

const Features = () => {

  const cards = [
    {
      title: 'Durability',
      serial: 1,
      image: '/assets/doors/hammer.png',
    },
    {
      title: 'Aesthetic Appeal',
      serial: 2,
      image: '/assets/doors/hammer.png',
    },
    {
      title: 'Smooth Finish',
      serial: 3,
      image: '/assets/doors/hammer.png',
    },
    {
      title: 'Versatility',
      serial: 4,
      image: '/assets/doors/hammer.png',
    },
    {
      title: 'Edge Banding',
      serial: 5,
      image: '/assets/doors/hammer.png',
    }
  ];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full py-10 lg:py-32 px-5 ipad:px-10 lg:px-20 gap-8'>
      <div className='flex flex-col justify-center gap-y-12 lg:pr-32'>
        <div className='text-7xl font-bold'>Features</div>
        <div className='text-gray-600'>A flush door has a solid core particle board infill with a wooden rail and stile
          framed around it and
          sandwiched between an exterior grade HDF substrate on the top and bottom.
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
        <div className='flex flex-col gap-y-4 justify-center items-center'>
          {cards
            .slice(0, 2).map((item, idx) => (
              <div key={idx}
                   style={{background: 'linear-gradient(134.73deg, rgba(33, 58, 89, 0.9) 20.87%, rgba(12, 100, 122, 0.9) 100%)'}}
                   className="flex flex-col h-[270px] w-[270px] p-8 rounded justify-between">
                <div className='flex flex-row justify-between'>
                  <img src={item.image} alt={item.title} height={50} width={50} className='object-contain'/>
                  <div
                    className='[writing-mode:vertical-rl] text-6xl font-bold
                    text-white [text-stroke:2px_black]'>{'0' + item.serial}</div>
                </div>
                <div>
                  <hr className="border-t border-gray-300 my-4 max-w-[50%]"/>
                  <div className='text-2xl text-white'>
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className='flex flex-col gap-y-4 justify-center items-center'>
          {cards
            .slice(2, 5).map((item, idx) => (
              <div key={idx}
                   style={{background: 'linear-gradient(134.73deg, rgba(33, 58, 89, 0.9) 20.87%, rgba(12, 100, 122, 0.9) 100%)'}}
                   className="flex flex-col h-[270px] w-[270px] p-8 rounded justify-between">
                <div className='flex flex-row justify-between'>
                  <img src={item.image} alt={item.title} height={50} width={50} className='object-contain'/>
                  <div
                    className='[writing-mode:vertical-rl] text-6xl font-bold
                    text-white [text-stroke:2px_black]'>{'0' + item.serial}</div>
                </div>
                <div>
                  <hr className="border-t border-gray-300 my-4 max-w-[50%]"/>
                  <div className='text-2xl text-white'>
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

export default Features;