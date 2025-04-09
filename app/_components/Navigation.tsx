import Link from "next/link";

const navItems = [
  { text: "Features", href: "#features" },
  { text: "About", href: "#about" },
  { text: "Portfolio", href: "#portfolio" },
];

const Navigation = () => {
  return (
    <nav>
      <div className="flex items-center gap-7">
        {navItems.map((item) => (
          <Link className="text-stone-400 transition-all duration-150 hover:text-white" key={item.href} href={item.href}>
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
