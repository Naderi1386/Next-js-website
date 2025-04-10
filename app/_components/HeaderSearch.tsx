"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchBox from "./SearchBox";

const HeaderSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer pt-2">
        <IoSearch color="white" size={26} />
      </button>
      {isOpen && <SearchBox handleChange={(val:boolean)=>setIsOpen(val)} />}
    </div>
  );
};

export default HeaderSearch;
