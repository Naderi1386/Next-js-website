import Image from "next/image";

const brands = [
  {
    img: "https://go.demo.nextjstemplates.com/images/brands/uideck.svg",
    href: "https://uideck.com/",
  },
  {
    img: "https://go.demo.nextjstemplates.com/images/brands/tailadmin.svg",
    href: "https://tailadmin.com/",
  },
  {
    img: "https://go.demo.nextjstemplates.com/images/brands/graygrids.svg",
    href: "https://graygrids.com/",
  },
  {
    img: "https://go.demo.nextjstemplates.com/images/brands/lineicons.svg",
    href: "https://lineicons.com/",
  },
  {
    img: "https://go.demo.nextjstemplates.com/images/brands/plainadmin.svg",
    href: "https://plainadmin.com/",
  },
];
const Brands = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-8">
      {brands.map((brand, index) => (
        <li key={index}>
          <a className="block h-[40px] w-[175px] relative" href={brand.href}>
            <Image
              fill
              className="object-center"
              src={brand.img}
              alt={`brand-${index}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Brands;
