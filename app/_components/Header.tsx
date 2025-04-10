import Button from "./Button";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 bg-[#111722] px-8 sm:px-18 py-4 font-semibold">
      <div className="flex items-center gap-14">
        <Logo />
        <Navigation />
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button color="blue">Sign in</Button>
          <Button color="dark">Sign up</Button>
        </div>
        <HeaderSearch />
        <HeaderMobileMenu />
      </div>
    </header>
  );
}

export default Header