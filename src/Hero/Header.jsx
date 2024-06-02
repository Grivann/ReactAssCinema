import React, { useState } from "react";
import HeadingBox from "./HeadingBox";
import NavHead from "./NavHead";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between h-26 items-center">
        <img
          className="w-[16%] ml-[6%]"
          src="https://s3-alpha-sig.figma.com/img/3de0/4caf/4582665240404145ae72b9255f16e36d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWnlFxQlXcJ-iMZlK1kCnrDqn6TODUflVGPOG1GyOK753QNQSc0hK7P58TZ3Qpp6MjXOqZHefdIdlwZ0pApT34oTn4k1SDJp1Z-jRM8v6NEkgRIFmpzwDpKNMD2sx3qwPfon4XeYcLHh5Z~S7v5WTTQTg5t7sKywmiJxAu6LDHZqGiKGke~1Y4jAKc41A30SJCXqvVp~ky9VcjKygAJAoiBSW2QjeGX1YnINvIf1wBJZKIbwynBBwgkDaf0WmFnR3oTSb-BUDQ1FO2nfK1HUXr0bQ4~apEwuKk7GP804BjCoGv3oaKF4HMfr5O~iJ~ci1X46ZLyNNEWG4ETReVmeQA__"
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
                    src="https://s3-alpha-sig.figma.com/img/3de0/4caf/4582665240404145ae72b9255f16e36d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWnlFxQlXcJ-iMZlK1kCnrDqn6TODUflVGPOG1GyOK753QNQSc0hK7P58TZ3Qpp6MjXOqZHefdIdlwZ0pApT34oTn4k1SDJp1Z-jRM8v6NEkgRIFmpzwDpKNMD2sx3qwPfon4XeYcLHh5Z~S7v5WTTQTg5t7sKywmiJxAu6LDHZqGiKGke~1Y4jAKc41A30SJCXqvVp~ky9VcjKygAJAoiBSW2QjeGX1YnINvIf1wBJZKIbwynBBwgkDaf0WmFnR3oTSb-BUDQ1FO2nfK1HUXr0bQ4~apEwuKk7GP804BjCoGv3oaKF4HMfr5O~iJ~ci1X46ZLyNNEWG4ETReVmeQA__"
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
