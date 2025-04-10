"use client";

import { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

interface SearchBoxPropsType {
  handleChange: (val: boolean) => void;
}

const SearchBox = ({ handleChange }: SearchBoxPropsType) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="flex items-center justify-center fixed inset-0">
      <div
        className="  fixed inset-0  backdrop-brightness-50 backdrop-blur-[2px] "
        onClick={() => handleChange(false)}
      ></div>
      <div className="w-[600px] h-[550px] bg-[#111722]  rounded-[8px] text-white z-[10]">
        <div className="px-4 py-6 border-b border-solid border-white/15 flex items-center gap-3 font-normal">
          <IoSearch size={26} color="white" className="cursor-pointer" />
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            type="text"
            placeholder="Search Entire Site | Products, Docs, Pages ..."
            className="grow outline-none"
          />
          {inputVal && (
            <button className="cursor-pointer" onClick={() => setInputVal("")}>
              <IoClose size={26} color="white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
