import { ReactNode } from "react"

interface TitlePropsType{
    children:ReactNode
}
const Title = ({children}: TitlePropsType) => {
  return (
    <span className="block absolute left-0 right-0 top-[-1.8rem] sm2x:top-[-2rem] lg:top-[-4rem] text-5xl sm2x:text-6xl lg:text-8xl font-bold opacity-[2.8%]">
      {children}
    </span>
  );
};

export default Title