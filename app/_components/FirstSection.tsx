import FirstSectionAbout from "./FirstSectionAbout";

const FirstSection = () => {
  return (
    <div className=" bg-gradient-to-r from-[#020618] to-[#314158] text-white px-8 sm:px-18 py-16">
      <div className="flex items-center justify-between gap-16">
        <FirstSectionAbout />
        <div className="bg-red-500 basis-[50%]">s</div>
      </div>
    </div>
  );
}

export default FirstSection