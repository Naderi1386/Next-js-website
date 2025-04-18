"use client";
import Image from "next/image";
import { useState } from "react";
import DeveloperIcons from "./DeveloperIcons";
import { AnimatePresence } from "framer-motion";

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
  const [Show, setShow] = useState<null | number>(null);
  return (
    <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-9 mt-18">
      {developers.map((dev, index) => (
        <li
          onMouseEnter={() => setShow(index)}
          onMouseLeave={() => setShow(null)}
          key={dev.name}
          className="w-full sm:w-[45%] lg:w-[24%] text-center "
        >
          <div className="w-full relative h-[380px] sm:h-[330px] lg:h-[295px] mb-6">
            <Image
              alt={`person-${dev.name}-img`}
              src={dev.img}
              fill
              className="object-cover rounded-md"
            />
            <AnimatePresence mode="wait">
            {Show===index && <DeveloperIcons />}

            </AnimatePresence>
          </div>
          <h3 className="text-white font-bold  text-[22px] mb-2">{dev.name}</h3>
          <span className="text-[#79808a] font-semibold">{dev.skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default DevelopersList;
