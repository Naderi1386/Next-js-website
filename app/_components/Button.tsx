import { ReactNode } from "react";

interface ButtonPropsType {
  children: ReactNode;
  color: "blue" | "dark" | "noColor";
  size?: "full" | "default";
}
const Button = ({ children, color, size }: ButtonPropsType) => {
  if (size === "full")
    return (
      <button
        className={`rounded-sm w-full px-5 py-3 text-white transition-all duration-150 cursor-pointer ${
          color === "blue"
            ? "bg-[#4a6cf7]  hover:opacity-90 "
            : "bg-[#222c40] hover:bg-[#4a6cf7]"
        }`}
      >
        {children}
      </button>
    );
  return (
    <button
      className={`rounded-sm px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 text-white transition-all duration-150 cursor-pointer  ${
        color === "blue" && "bg-[#4a6cf7]  hover:opacity-90"
      } ${color === "dark" && "bg-[#222c40] hover:bg-[#4a6cf7]"} ${
        color === "noColor" && "bg-transparent hover:text-[#4a6cf7]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
