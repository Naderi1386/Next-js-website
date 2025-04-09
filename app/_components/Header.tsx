import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 bg-[#111722] px-18 py-8">
      <div className="flex items-center gap-4">
        <Logo />
      </div>
    </header>
  );
}

export default Header