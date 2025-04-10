"use client";

import { IoClose } from "react-icons/io5";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
interface MobileMenuSectionPropsType{
    onClose:()=>void
}
const MobileMenuSection = ({onClose}: MobileMenuSectionPropsType) => {
  return (
    <div className="bg-[#111722] fixed inset-0 px-18 py-4 font-semibold z-[100]">
      <div className="flex items-center justify-between">
        <Logo />
          <div className="pt-2 flex items-center gap-4">
            <HeaderSearch />
            <button onClick={onClose} className="cursor-pointer">
              <IoClose color="white" size={28} />
            </button>
          </div>
      </div>
    </div>
  );
};

export default MobileMenuSection;
