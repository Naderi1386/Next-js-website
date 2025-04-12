import Image from "next/image";

const aboutItems = [
  {
    title: "DB, Auth, Stripe, Sanity, and More",
    captions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.",
      "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
    ],
    type: "about",
  },
  {
    title: "Built-with Latest Tools and Technologies",
    captions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.",
      "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
    ],
    type: "mission",
  },
  {
    title: "High-quality Premium Design with Everything You Need",
    captions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.",
      "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
    ],
    type: "vision",
  },
];

interface AboutListPropsType {
  type: string;
}
const AboutList = ({ type }: AboutListPropsType) => {
    
  const item = aboutItems.find((item) => item.type === type);
  return (
    <div className="text-white mt-16  px-2 lg:px-16 ">
      <div className="flex flex-col custome-lg:flex-row custome-lg:items-center custome-lg:justify-between gap-10">
        <div className={`basis-full lg:basis-[50%]  ${type !== "mission" && "order-1"} py-8`}>
          <h2 className="font-bold text-white text-[2.3rem] w-full sm2x:w-[450px] mb-7">
            {item?.title}
          </h2>
          {item?.captions.map((cap, index) => (
            <p
              key={index}
              className={`text-[#79808a] ${
                index !== aboutItems.length - 1 && "pb-7"
              }`}
            >
              {cap}
            </p>
          ))}
        </div>
        <div className="basis-full custome-lg:basis-[50%] relative">
          <div className="w-[70%] relative h-[480px]">
            <Image
              src={"/images/img-1.webp"}
              alt="img-1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[320px] h-[365px] absolute right-10 bottom-16 backdrop-blur-sm border border-solid border-white/10"></div>
          <div className="w-[320px] h-[365px] absolute right-3.5 bottom-10">
            <Image
              fill
              className="object-cover"
              src={"/images/img-2.webp"}
              alt="img-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutList;
