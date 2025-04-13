import Image from "next/image";

const developers = [
  {
    name: "Olivia Andrium",
    skill: "Project Manager",
    img: "/images/person-1.webp",
  },
  {
    name: "Jemse Kemorun",
    skill: "Frontend Developer",
    img: "/images/person-2.webp",
  },
  {
    name: "Avi Pestarica",
    skill: "Product Designer",
    img: "/images/person-3.webp",
  },
];

const DevelopersList = () => {
  return (
    <ul className="flex justify-center items-center gap-7 mt-16">
      {developers.map((dev) => (
        <li key={dev.name} className="w-[20%] text-center">
          <div className="w-full relative h-[260px] mb-6">
            <Image
              alt={`person-${dev.name}-img`}
              src={dev.img}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-white font-bold  text-[22px] mb-3">
            {dev.name}
          </h3>
          <span className="text-[#79808a] font-semibold">{dev.skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default DevelopersList;
