"use client";

import { useState } from "react";

const portfolioItems = [
  { type: ["Brand", "Ecommerce"], img: "./images/brand-1.webp" },
  { type: ["Brand", "Ecommerce"], img: "./images/brand-2.webp" },
  { type: ["Brand"], img: "./images/brand-3.webp" },
  { type: ["Ecommerce"], img: "./images/ecommerce-3.webp" },
];

const PortfolioItems = () => {
  const [filter, setFilter] = useState<"All" | "Brand" | "Ecommerce">("All");
  return (
    <div className="mt-20">
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

    </div>
  );
};

export default PortfolioItems;
