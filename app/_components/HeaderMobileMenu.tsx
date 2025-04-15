"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileMenuSection from "./MobileMenuSection";
import { AnimatePresence } from "framer-motion";

const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block custome-lg:hidden">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer pt-2">
        <IoMenu size={26} color="white" />
      </button>
      <AnimatePresence>
        {isOpen && <MobileMenuSection onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default HeaderMobileMenu;
