import Image from "next/image"

const FirstSectionImages = () => {
  return (
    <div className="basis-full lg:basis-[50%] flex justify-end">
      <div className="w-[80%] relative">
        <div className="relative h-[500px]">
          <Image
            fill
            className="object-cover"
            alt="img-2"
            src={"/images/image-2.webp"}
          />
        </div>
        <div className="w-[350px] h-[410px]  absolute left-[-4rem] bottom-[-2rem] ">
          <Image alt="img-1" fill className="object-cover" src={"/images/image-1.webp"} />
        </div>
      </div>
    </div>
  );
}

export default FirstSectionImages