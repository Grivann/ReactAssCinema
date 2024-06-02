import React, { useEffect, useState } from 'react';
import BtnBox from './BtnBox';

export default function HeroText({ heroimg }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImageStyle = windowWidth > 1024 ? { backgroundImage: `url(${heroimg})` } : {};

  return (
    <div
      className="flex flex-col items-center w-full h-[640px] pt-[3%] bg-cover lg:text-white"
      style={backgroundImageStyle}
    >
      <div className=" flex flex-col items-center w-full h-full">
        <p className="w-[70%] text-[20px] lg:text-[24px] leading-[36px] text-center mb-5">Food App</p>
        <h1 className="w-[70%] text-[45px] lg:text-[50px] leading-[80px] text-center mb-6 poppins-bold">
          Why stay hungry when you can order from Bella Onojie
        </h1>
        <p className="w-[70%] text-[20px] lg:text-[24px] leading-[38px] text-center mb-7">
          Download the bella onoje’s food app now on
        </p>
        <BtnBox />
      </div>
    </div>
  );
}
