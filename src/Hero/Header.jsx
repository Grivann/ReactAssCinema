import React, { useState } from "react";
import HeadingBox from "./HeadingBox";
import NavHead from "./NavHead";

export default function Header({logoimg}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between h-26 items-center">
        <img
          className="w-[16%] ml-[6%]"
          src={logoimg}
          alt=""
        />
        <HeadingBox />
        <div className="pr-[7%]">
          <i className="fa-solid fa-bars lg:hidden" onClick={handleMenu}></i>
        </div>
      </div>
      {isMenuOpen && (
        <div id="navVal" className="fixed inset-0 bg-white">
            <div className="flex flex-col">
                <div className="flex justify-between h-26 items-center">
                    <img
                    className="w-[16%] ml-[6%]"
                    src={logoimg}
                    alt=""/>
                    <div className="pr-[7%]">
                        <i className="fa-solid fa-xmark lg:hidden" onClick={handleMenu}></i>
                    </div>
                </div>
                <NavHead></NavHead>
            </div>


        </div>
      )}
    </>
  );
}
