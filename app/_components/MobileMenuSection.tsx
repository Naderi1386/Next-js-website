"use client";

import { IoClose } from "react-icons/io5";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import Button from "./Button";
interface MobileMenuSectionPropsType{
    onClose:()=>void
}
const MobileMenuSection = ({onClose}: MobileMenuSectionPropsType) => {
  return (
    <div className="bg-[#111722] fixed inset-0 px-8 py-4 font-semibold z-[100] flex flex-col">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="pt-2 flex items-center gap-4">
          <HeaderSearch />
          <button onClick={onClose} className="cursor-pointer">
            <IoClose color="white" size={34} />
          </button>
        </div>
      </div>
      <div className="grow">
        
      </div>
      <div className="flex items-center gap-4">
        <Button size="full" color="blue">
          Sign in
        </Button>
        <Button size="full" color="dark">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default MobileMenuSection;
