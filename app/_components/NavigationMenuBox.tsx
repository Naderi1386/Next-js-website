import Link from "next/link";
import { NavigationMenuItemType } from "./NavigationMenu";

interface NavigationMenuBoxPropsType {
  items: NavigationMenuItemType[];
}
const NavigationMenuBox = ({ items }: NavigationMenuBoxPropsType) => {
  return (
    <ul className="flex flex-col bg-[#2c3443] absolute left-0 right-0 bottom-[-20.5rem] mx-auto w-[250px] rounded-md px-8 py-6 space-y-4 ">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className="text-[#79808a] transition-all duration-150 hover:text-white"
            href={item.href}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenuBox;
