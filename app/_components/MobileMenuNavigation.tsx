"use client";
import Link from "next/link";
import { items, navItems } from "./Navigation";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
interface MobileMenuNavigationType {
  onClose: () => void;
}

const MobileMenuNavigation = ({onClose}: MobileMenuNavigationType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-7 h-full">
      {navItems.map((item) => (
        <Link 
        onClick={onClose}
          className="text-[#79808a] transition-all duration-150 hover:text-white hover:scale-105"
          key={item.href}
          href={item.href}
        >
          {item.text}
        </Link>
      ))}
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={` text-[#79808a] hover:text-white hover:scale-105  transition-all duration-150  flex items-center gap-2 cursor-pointer`}
      >
        Pages
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-7">
          {items.map((item, index) => (
            <Link
              className="text-[#79808a] transition-all duration-150 hover:text-white hover:scale-105"
              key={index}
              href={item.href}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenuNavigation;
