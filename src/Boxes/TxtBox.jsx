export default function TxtBox({text1,text2,text3}) {
  return (
    <div className="flex flex-col lg:w-[40%] w-[70%] text-center lg:text-left">
      <h3 className="text-[#FA4A0C]  text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium"> {text1} </h3>
      <h1 className=" text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[57px] font-bold"> {text2} </h1>
      <p className="text-[#737373] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px]"> {text3} </p>
    </div>
  );
}
