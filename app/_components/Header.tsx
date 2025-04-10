import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 bg-[#111722] px-18 py-4">
      <div className="flex items-center gap-14">
        <Logo />
        <Navigation />
      </div>
      <div>
        <div className="flex items-center gap-4">
          <Button color="blue">Sign in</Button>
          <Button color="dark">Sign up</Button>
        </div>
      </div>
    </header>
  );
}

export default Header