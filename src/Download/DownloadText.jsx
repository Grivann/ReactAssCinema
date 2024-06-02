import React, { useEffect, useState } from 'react';
import BtnBox from './BtnBox';

export default function DownloadText({ Dlimg }) {
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

  const backgroundImageStyle = windowWidth > 1024 ? { backgroundImage: `url(${Dlimg})` } : { backgroundColor: "#252B42" };

  return (
    <div
      className="flex flex-col text-white items-center w-full h-[500px] pt-[125px] pb-[125px] bg-cover relative"
      style={backgroundImageStyle}
    >
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <h1 className="w-[70%] text-[60px] leading-[80px] text-center mb-6">
          Download the app now
        </h1>
        <p className="w-[70%] text-[24px] leading-[38px] text-center mb-7">
          Available on your favorite store. Start your premium experience now
        </p>
        <BtnBox />
      </div>
    </div>
  );
}
