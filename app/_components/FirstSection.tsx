import FirstSectionAbout from "./FirstSectionAbout";
import FirstSectionImages from "./FirstSectionImages";

const FirstSection = () => {
  return (
    <div className=" bg-gradient-to-b from-[#1d293d] to-[#0c0a09] lg:bg-gradient-to-r lg:from-[#0c0a09] lg:to-[#1d293d] text-white px-8 sm:px-28 py-28">
      <div className="flex flex-col justify-center lg:flex-row sm:items-center lg:justify-between gap-16">
        <FirstSectionAbout />
        <FirstSectionImages />
      </div>
    </div>
  );
}

export default FirstSection