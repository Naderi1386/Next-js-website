import Button from "./Button";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between sticky top-0 gap-8 bg-[#111722] px-8 sm:px-22 py-4 font-semibold z-[100]">
      <div className="flex items-center gap-14">
        <Logo />
        <Navigation />
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden custome-lg:flex custome-lg:items-center custome-lg:gap-4">
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