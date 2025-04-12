"use client";
import { useState } from "react";
import AboutList from "./AboutList";

const stateItems = [
  { text: "About Us", value: "about" },
  { text: "Our Mission", value: "mission" },
  { text: "Our Vision", value: "vision" },
];

const About = () => {
  const [type, setType] = useState("about");
  return (
    <div>

    <div className="px-2 lg:px-16 ">
      <ul className="flex">
        {stateItems.map((item, index) => (
          <li
            onClick={() => {
              if (type !== item.value) setType(item.value);
            }}
            key={index}
            className={`grow cursor-pointer border-b border-solid text-center font-semibold pb-9 transition-all duration-150 ${
              type === item.value
                ? "text-blue-500 border-blue-500"
                : "text-white border-[#4b4e56] hover:border-blue-500"
            } `}
          >
            <span className="text-sm sm2x:text-base">{item.text}</span>{" "}
          </li>
        ))}
      </ul>
    </div>
      <AboutList type={type} />
    </div>
  );
};

export default About;
