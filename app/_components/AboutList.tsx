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
    <div className="text-white mt-16 bg-gradient-to-t from-[#1d293d] to-[#0c0a09] px-2 lg:px-16 ">
      <div className="flex items-center justify-between gap-10">
        <div className={`basis-[50%]  ${type !== "mission" && "order-1"} py-8`}>
          <h2 className="font-bold text-white text-[2.3rem] w-[450px] mb-7">
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
        <div className="basis-[50%] bg-yellow-300">images</div>
      </div>
    </div>
  );
};

export default AboutList;
