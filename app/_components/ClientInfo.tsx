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
    <div className="flex items-center justify-between gap-20">
      <div className="basis-[65%]">
        <p className="text-[#79808a] mb-8 text-2xl">{data?.text}</p>
        <span className="block text-white font-semibold text-lg mb-1">
          {data?.name}
        </span>
        <span className="text-[#79808a]">{data?.skill}</span>
      </div>
      <div className="basis-[35%]">
        <div className="w-full h-[420px] relative">
            <Image alt="client-1-img" src={data?.img as string} fill className="object-cover" />
        </div>

      </div>
    </div>
  );
};

export default ClientInfo;
