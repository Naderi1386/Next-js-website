"use client";
import Image from "next/image";
import PortfolioLink from "./PortfolioLink";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
interface PortfolioContentPropsType {
  data: {
    type: string[];
    img: string;
  }[];
  isAllData: boolean;
}

const PortfolioContent = ({ data, isAllData }: PortfolioContentPropsType) => {
  const [show, setShow] = useState<null | number>(null);
  return (
    <div className="flex items-start custome-md:justify-between gap-14 xl:gap-18 px-4 sm:px-14 md:px-20 lg:px-36">
      <div className="basis-full sm:basis-[70%] flex flex-wrap sm:flex-nowrap flex-row items-start gap-2">
        <div className="block basis-[65%] custome-md:basis-[55%]">
          <div
            onMouseEnter={() => setShow(0)}
            onMouseLeave={() => setShow(null)}
            className="relative w-full h-[100px] sm:h-40"
          >
            <Image
              alt="img-1"
              src={data.at(0)?.img as string}
              fill
              className="object-center rounded-md"
            />
            {show === 0 && (
              <AnimatePresence mode="wait">
                <PortfolioLink />
              </AnimatePresence>
            )}
          </div>
          {isAllData && (
            <div
              onMouseEnter={() => setShow(data.length - 1)}
              onMouseLeave={() => setShow(null)}
              className="relative w-[75%] h-40 sm:h-56 mt-2"
            >
              <Image
                alt="img-4"
                src={data.at(data.length - 1)?.img as string}
                fill
                className="object-center rounded-md"
              />{" "}
              <AnimatePresence mode="wait">
                {show === data.length - 1 && <PortfolioLink />}
              </AnimatePresence>
            </div>
          )}
        </div>
        <div className="block basis-[48.8%] sm:basis-[35%] custome-md:basis-[45%]">
          <div
            onMouseEnter={() => setShow(1)}
            onMouseLeave={() => setShow(null)}
            className="relative w-full h-[15rem] sm:h-[20rem] md:h-[30rem] "
          >
            <Image
              alt="img-2"
              src={data.at(1)?.img as string}
              fill
              className="object-cover rounded-md"
            />{" "}
            <AnimatePresence mode="wait">
              {show === 1 && <PortfolioLink />}
            </AnimatePresence>
          </div>
          <div
            onMouseEnter={() =>
              setShow(isAllData ? data.length - 2 : data.length - 1)
            }
            onMouseLeave={() => setShow(null)}
            className="block custome-md:hidden mt-2 relative w-full h-40 xl:h-60"
          >
            <Image
              alt="img-3"
              src={
                isAllData
                  ? (data.at(data.length - 2)?.img as string)
                  : (data.at(data.length - 1)?.img as string)
              }
              fill
              className="object-cover rounded-md"
            />{" "}
            <AnimatePresence mode="wait">
              {isAllData
                ? show === data.length - 2 && <PortfolioLink />
                : show === data.length - 1 && <PortfolioLink />}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="hidden custome-md:block custome-md:basis-[30%]">
        <div
          onMouseEnter={() =>
            setShow(isAllData ? data.length - 2 : data.length - 1)
          }
          onMouseLeave={() => setShow(null)}
          className="relative w-full h-36 xl:h-60"
        >
          <Image
            alt="img-3"
            src={
              isAllData
                ? (data.at(data.length - 2)?.img as string)
                : (data.at(data.length - 1)?.img as string)
            }
            fill
            className="object-cover rounded-md"
          />{" "}
          <AnimatePresence mode="wait">
            {isAllData
              ? show === data.length - 2 && <PortfolioLink />
              : show === data.length - 1 && <PortfolioLink />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
