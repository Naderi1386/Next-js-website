import FirstSectionAbout from "./FirstSectionAbout";

const FirstSection = () => {
  return (
    <div className=" bg-gradient-to-r from-[#0c0a09] to-[#1d293d] text-white px-8 sm:px-22 py-28">
      <div className="flex flex-col justify-center lg:flex-row sm:items-center lg:justify-between gap-16">
        <FirstSectionAbout />
        <div className="bg-red-500 basis-[50%]">s</div>
      </div>
    </div>
  );
}

export default FirstSection