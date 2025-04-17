import { ReactNode } from "react";
import Title from "./Title";
interface TitlesPropsType {
  titleText?: string;
  mainTitle: string;
  caption: string;
  children?: ReactNode;
}

const Titles = ({
  titleText,
  mainTitle,
  caption,
  children,
}: TitlesPropsType) => {
  return (
    <div className="px-8 sm:px-18 py-40 bg-[#0c0a09]">
      <div className="text-center text-white relative">
        {titleText && <Title>{titleText}</Title>}

        <h2 className="font-bold md:w-[582px] md:mx-auto text-[34px]  md:text-[45px] leading-[58px]">
          {mainTitle}
        </h2>
        <p className="mt-7 md:mx-auto md:w-[640px] text-[#79808a]">{caption}</p>
      </div>
      {children && children}
    </div>
  );
};

export default Titles;
