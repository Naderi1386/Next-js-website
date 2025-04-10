import Link from "next/link";
import NavigationMenu from "./NavigationMenu";

const navItems = [
  { text: "Features", href: "#features" },
  { text: "About", href: "#about" },
  { text: "Portfolio", href: "#portfolio" },
];

const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            className="text-[#79808a] transition-all duration-150 hover:text-white hover:scale-105"
            key={item.href}
            href={item.href}
          >
            {item.text}
          </Link>
        ))}
        <NavigationMenu
          title="Pages"
          items={[
            { text: "Home", href: "/" },
            { text: "Docs", href: "/" },
            { text: "Support", href: "/" },
            { text: "Blog", href: "/" },
            { text: "Sign in", href: "/" },
            { text: "Sign up", href: "/" },
            { text: "Error 404", href: "/" },
          ]}
        />
      </div>
    </nav>
  );
};

export default Navigation;
