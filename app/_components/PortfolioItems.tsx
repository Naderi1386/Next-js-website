"use client";

import { useState } from "react";

const PortfolioItems = () => {
  const [filter, setFilter] = useState<"All" | "Brand" | "Ecommerce">("All");
  return (
    <div className="mt-20">
      <ul className="flex items-center justify-center gap-5 text-white font-semibold">
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
    </div>
  );
};

export default PortfolioItems;
