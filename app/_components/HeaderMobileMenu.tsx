"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileMenuSection from "./MobileMenuSection";

const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer pt-2">
        <IoMenu size={26} color="white" />
      </button>
      {isOpen && <MobileMenuSection onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default HeaderMobileMenu;
