import Image from "next/image";

const clients = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard",
    img: "/images/client-1.webp",
    name: "Naimur Rahman",
    skill: "Product Designer @ Pimjo",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard",
    img: "/images/client-1.webp",
    name: "Naimur Rahman",
    skill: "Product Designer @ Pimjo",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard",
    img: "/images/client-1.webp",
    name: "Naimur Rahman",
    skill: "Product Designer @ Pimjo",
  },
];

const ClientInfo = () => {
  const data = clients.at(0);
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-20">
      <div className="basis-full text-center lg:text-left lg:basis-[65%] order-1 lg:order-[0]">
        <p className="text-[#79808a] mb-8 text-base w-full lg:text-2xl lg:w-[75%] ">
          {data?.text}
        </p>
        <span className="block text-white font-semibold text-lg mb-1">
          {data?.name}
        </span>
        <span className="text-[#79808a]">{data?.skill}</span>
      </div>
      <div className="w-full lg:basis-[35%] relative">
        <div className="absolute -right-5 -top-5  w-full h-[420px] backdrop-blur-sm bg-[#fff]/10  border border-solid border-white/5"></div>
        <div className="w-full h-[420px] relative">
          <Image
            alt="client-1-img"
            src={data?.img as string}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
