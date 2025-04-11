import Image from "next/image"

const FirstSectionImages = () => {
  return (
    <div className="basis-[50%] flex justify-end">
      <div className="w-[80%] relative">
        <div className="relative h-[500px]">
          <Image fill className="object-cover" alt="img-2" src={"/images/image-2.webp"} />
        </div>
      </div>
    </div>
  );
}

export default FirstSectionImages