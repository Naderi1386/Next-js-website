import Image from "next/image"

const FirstSectionImages = () => {
  return (
    <div className="basis-full custome-lg:basis-[50%] flex justify-end">
      <div className="w-full relative">
        <div className="relative w-full sm:w-[560px] custome-lg:w-full  h-[500px]">
          <Image
            fill
            className="object-cover"
            alt="img-2"
            src={"/images/image-2.webp"}
          />
        </div>
        <div className=" backdrop-blur-sm border border-solid border-white/10 w-[250px] h-[300px] sm2x:w-[350px] sm2x:h-[410px]   absolute left-[-.2rem] sm2x:left-[-.5rem] bottom-[-1.8rem]  "></div>
        <div className="w-[250px] h-[300px] sm2x:w-[350px] sm2x:h-[410px]  absolute left-[-1.5rem] sm2x:left-[-2.2rem] bottom-[-3.5rem] ">
          <Image
            alt="img-1"
            fill
            className="object-cover"
            src={"/images/image-1.webp"}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSectionImages