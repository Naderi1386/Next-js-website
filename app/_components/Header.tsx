import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 bg-[#111722] px-18 py-5">
      <div className="flex items-center gap-14">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header