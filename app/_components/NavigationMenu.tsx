"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import NavigationMenuBox from "./NavigationMenuBox";

export interface NavigationMenuItemType {
  text: string;
  href: string;
}
interface NavigationMenuPropsType {
  title: string;
  items: NavigationMenuItemType[];
}

const NavigationMenu = ({ title, items }: NavigationMenuPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="text-[#79808a] transition-all duration-150 hover:text-white flex items-center gap-2 cursor-pointer">
        {title}
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      {isOpen && <NavigationMenuBox items={items} />}

    </div>
  );
};

export default NavigationMenu;
