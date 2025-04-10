import Link from "next/link";
import { NavigationMenuItemType } from "./NavigationMenu";

interface NavigationMenuBoxPropsType {
  items: NavigationMenuItemType[];
}
const NavigationMenuBox = ({ items }: NavigationMenuBoxPropsType) => {
  return (
    <div className="absolute left-0 right-0 bottom-[-20rem] mx-auto w-[250px] pt-[10rem]">
      <ul className="flex flex-col bg-[#2c3443]  rounded-[4px] px-8 py-6 space-y-4 z-[50] ">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className={`  ${
                index === 0
                  ? "text-white"
                  : "text-[#79808a] hover:text-white transition-all duration-150"
              } `}
              href={item.href}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenuBox;
