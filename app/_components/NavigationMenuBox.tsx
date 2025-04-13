import Link from "next/link";
import { NavigationMenuItemType } from "./NavigationMenu";
import { motion } from "framer-motion";

interface NavigationMenuBoxPropsType {
  items: NavigationMenuItemType[];
}
const NavigationMenuBox = ({ items }: NavigationMenuBoxPropsType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration:'0.3',ease:'easeInOut'}}
      className="absolute left-0 right-0 bottom-[-20rem] mx-auto w-[250px] pt-[10rem] z-[10000]"
    >
      <ul className="flex flex-col bg-[#2c3443]  rounded-[4px] px-8 py-6 space-y-4  ">
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
    </motion.div>
  );
};

export default NavigationMenuBox;
