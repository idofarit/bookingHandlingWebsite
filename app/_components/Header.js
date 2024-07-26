import Logo from "@/app/_components/Logo";
import Navigation from "./Navigation";

function Header({ className }) {
  return (
    <header className={`${className} border-b px-8 py-1 bg-transparent`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
