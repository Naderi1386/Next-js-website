import { ReactNode } from "react"

interface ButtonPropsType{
    children:ReactNode
    color:"blue" | "dark"
}
const Button = ({children,color}: ButtonPropsType) => {
  return (
    <button
      className={`rounded-sm px-5 py-3 text-white transition-all duration-150 cursor-pointer ${
        color === "blue"
          ? "bg-[#4a6cf7]  hover:opacity-90 "
          : "bg-[#222c40] hover:bg-[#4a6cf7]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button