import Heading from "./Heading";

export default function NavHead() {
  return (
    <div className="flex flex-col">
        <div className="w-full text-[25px] poppins rounded-[10px] pl hover:bg-[#EEEEEE] ">
            <Heading text="Home" /> 
        </div>
        <div className="w-full text-[25px] poppins rounded-[10px] pl hover:bg-[#EEEEEE] ">
            <Heading text="Product" />
        </div>
        <div className="w-full text-[25px] poppins rounded-[10px] pl hover:bg-[#EEEEEE] ">
            <Heading text="Faq" />
        </div>
        <div className="w-full text-[25px] poppins rounded-[10px] pl hover:bg-[#EEEEEE] ">
            <Heading text="Contact" />
        </div>
    </div>
  );
}
