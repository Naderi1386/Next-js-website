import FirstSectionAbout from "./FirstSectionAbout";
import FirstSectionImages from "./FirstSectionImages";

const FirstSection = () => {
  return (
    <div className=" bg-gradient-to-b from-[#1d293d] to-[#0c0a09] custome-lg:bg-gradient-to-r custome-lg:from-[#0c0a09] custome-lg:to-[#1d293d] text-white px-8 sm:px-28 pb-32 pt-20">
      <div className="flex flex-col justify-center custome-lg:flex-row sm:items-center custome-lg:justify-between gap-10 custome-lg:gap-16">
        <FirstSectionAbout />
        <FirstSectionImages />
      </div>
    </div>
  );
}

export default FirstSection