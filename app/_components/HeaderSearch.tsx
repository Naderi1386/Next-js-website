"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const HeaderSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer pt-2">
        <IoSearch color="white" size={26} />
      </button>
    </div>
  );
};

export default HeaderSearch;
