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
      className="bg-[#000]/30 opacity-0 absolute left-0 right-0 bottom-4 p-5 flex items-center justify-between gap-4 mx-auto w-[80%] backdrop-blur-[30px]  rounded-sm  text-black"
    >
      <div>
        <h4 className="text-white font-bold mb-1 text-[19px]">Portfolio</h4>
        <span className="text-[#d9d9d9] text-sm">Branded Ecommerce</span>
      </div>
      <div className="border-l border-solid border-white/60 pl-8">
        <Link href={"/"} className="w-[45px] h-[45px] flex items-center justify-center rounded-[100%] transition-all duration-150 hover:bg-blue-500 bg-white/20">
          <FaArrowRightLong size={23} color="white" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioLink;
