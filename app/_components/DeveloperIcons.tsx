import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const DeveloperIcons = () => {
  return (
    <motion.div
      className="absolute left-0 right-0 bottom-8 flex items-center justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {" "}
      <div className="w-[40px] h-[40px] backdrop-blur-lg rounded-[100%] flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-blue-500 border border-solid border-white/15">
        <FaFacebookF color="white" size={22} />{" "}
      </div>{" "}
      <div className="w-[40px] h-[40px] backdrop-blur-lg rounded-[100%] flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-blue-500 border border-solid border-white/15">
        <FaTwitter color="white" size={22} />{" "}
      </div>{" "}
      <div className="w-[40px] h-[40px] backdrop-blur-lg rounded-[100%] flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-blue-500 border border-solid border-white/15">
        <FaLinkedinIn color="white" size={22} />{" "}
      </div>{" "}
    </motion.div>
  );
};

export default DeveloperIcons;
