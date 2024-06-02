import { useState, useEffect } from "react";
import TxtBox from "./TxtBox";

export default function Box({ text1, text2, text3, sauce, lorr }) {
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

  const flexx = windowWidth > 1024 ? lorr : 'flex-col-reverse';
  const className = `flex items-center lg:h-[600px] lg:justify-evenly lg:items-center ${flexx}`;

  return (
    <div className={className}>
      <img className="h-[600px] w-[415px] bg-cover" src={sauce} alt="" />
      <TxtBox text1={text1} text2={text2} text3={text3} />
    </div>
  );
}
