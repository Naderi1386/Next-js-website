import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const PortfolioLink = () => {
  return (
    <motion.div
      transition={{ duration: "0.2" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-[#000]/30 opacity-0 absolute left-0 right-0 bottom-[6px] sm:bottom-4 p-2 md:p-5 flex items-center justify-between gap-4 mx-auto w-[80%] backdrop-blur-[30px]  rounded-sm text-black overflow-hidden"
    >
      <div>
        <h4 className="text-white font-bold mb-1 text-sm xl:text-[19px]">Portfolio</h4>
        <span className="text-[#d9d9d9] text-xs xl:text-sm">Branded Ecommerce</span>
      </div>
      <div className="border-l border-solid border-white/60 pl-2 md:pl-8">
        <Link href={"/"} className="w-[30px] h-[30px] xl:w-[45px] xl:h-[45px] flex items-center justify-center rounded-[100%] transition-all duration-150 hover:bg-blue-500 bg-white/20">
          <FaArrowRightLong size={18} color="white" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioLink;
