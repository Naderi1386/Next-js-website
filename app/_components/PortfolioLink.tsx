import { motion } from "framer-motion";

const PortfolioLink = () => {
  return (
    <motion.div
      transition={{ duration: "0.3" }}
      initial={{ opacity: 0,y:20 }}
      animate={{ opacity: 1,y:0 }}
      exit={{ opacity: 0,y:20 }}
      className="absolute left-0 right-0 bottom-4 mx-auto w-[80%] backdrop-blur-[30px] bg-[#000] text-black"
    >
      sssd
    </motion.div>
  );
};

export default PortfolioLink;
