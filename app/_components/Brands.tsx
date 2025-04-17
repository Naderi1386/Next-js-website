import Image from "next/image";

const brands = [
  "https://go.demo.nextjstemplates.com/images/brands/uideck.svg",
  "https://go.demo.nextjstemplates.com/images/brands/tailadmin.svg",
  "https://go.demo.nextjstemplates.com/images/brands/graygrids.svg",
  "https://go.demo.nextjstemplates.com/images/brands/lineicons.svg",
  "https://go.demo.nextjstemplates.com/images/brands/plainadmin.svg",
];
const Brands = () => {
  return <ul className="flex items-center justify-center gap-7">
    {brands.map((brand,index)=><li className="h-[40px] w-[150px] relative" key={index}>
        <Image fill className="object-cover" src={brand} alt={`brand-${index}`} />
    </li>)}

  </ul>;
};

export default Brands;
