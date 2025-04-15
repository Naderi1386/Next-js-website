"use client";

import Image from "next/image";
import { useState } from "react";

const portfolioItems = [
  { type: ["Brand", "Ecommerce"], img: "/images/brand-1.webp" },
  { type: ["Brand", "Ecommerce"], img: "/images/brand-2.webp" },
  { type: ["Brand"], img: "/images/brand-3.webp" },
  { type: ["Ecommerce"], img: "/images/ecommerce-3.webp" },
];

const PortfolioItems = () => {
  const [filter, setFilter] = useState<"All" | "Brand" | "Ecommerce">("All");
  const data =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type.includes(filter));

  const isAllData = data.length === 4;
  return (
    <div className="pt-20 pb-16">
      <ul className="flex items-center justify-center gap-5 text-white font-semibold mb-12">
        <li
          className={`${filter === "All" && "underline"} cursor-pointer`}
          onClick={() => setFilter("All")}
        >
          <span>All</span>
        </li>
        <li
          className={`${filter === "Brand" && "underline"} cursor-pointer`}
          onClick={() => setFilter("Brand")}
        >
          <span>Brand</span>
        </li>
        <li
          className={`${filter === "Ecommerce" && "underline"} cursor-pointer`}
          onClick={() => setFilter("Ecommerce")}
        >
          <span>Ecommerce</span>
        </li>
      </ul>
      <div className="flex items-start justify-between gap-14 xl:gap-24 px-4 custome-md:px-16">
        <div className=" basis-[80%] custome-md:basis-[70%] flex items-start gap-2">
          <div className="basis-[65%] custome-md:basis-[55%]">
            <div className="relative w-full h-40">
              <Image
                alt="img-1"
                src={data.at(0)?.img as string}
                fill
                className="object-cover rounded-md"
              />
            </div>
            {isAllData && (
              <div className="relative w-[75%] h-60 mt-2">
                <Image
                  alt="img-4"
                  src={data.at(data.length - 1)?.img as string}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
          </div>
          <div className="basis-[35%] custome-md:basis-[45%]">
            <div className="relative w-full h-[20rem] custome-md:h-[35rem]">
              <Image
                alt="img-2"
                src={data.at(1)?.img as string}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="block custome-md:hidden mt-2 relative w-full h-36 xl:h-60">
              <Image
                alt="img-3"
                src={data.at(data.length - 1)?.img as string}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="hidden custome-md:block custome-md:basis-[30%]">
          <div className="relative w-full h-36 xl:h-60">
            <Image
              alt="img-3"
              src={data.at(data.length - 1)?.img as string}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItems;
