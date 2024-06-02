import Heading from "./Heading";

export default function HeadingBox() {
  return (
    <div className=" justify-between w-5/12 mr-[2.5%] hidden lg:flex">
      <Heading text="Home" />
      <Heading text="Product" />
      <Heading text="Faq" />
      <Heading text="Contact" />
    </div>
  );
}
