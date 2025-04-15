"use client";

import { useState } from "react";
import PortfolioChangeFilter from "./PortfolioChangeFilter";
import PortfolioContent from "./PortfolioContent";

const portfolioItems = [
  { type: ["Brand", "Ecommerce"], img: "/images/brand-1.webp" },
  { type: ["Brand", "Ecommerce"], img: "/images/brand-2.webp" },
  { type: ["Brand"], img: "/images/brand-3.webp" },
  { type: ["Ecommerce"], img: "/images/ecommerce-3.webp" },
];

const PortfolioItems = () => {
  const [filter, setFilter] = useState("All");
  const data =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type.includes(filter));

  const isAllData = data.length === 4;
  return (
    <div className="pt-20 pb-16">
      <PortfolioChangeFilter
        filter={filter}
        setFilter={(val: string) => setFilter(val)}
      />
      <PortfolioContent data={data} isAllData={isAllData} />
    </div>
  );
};

export default PortfolioItems;
