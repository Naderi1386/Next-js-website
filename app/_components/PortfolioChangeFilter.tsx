
interface PortfolioChangeFilterPropsType{
    filter:string
    setFilter:(val:string)=>void
}

const PortfolioChangeFilter = ({filter,setFilter}: PortfolioChangeFilterPropsType) => {
  return (
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
  );
};

export default PortfolioChangeFilter