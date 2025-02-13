import Navbar from "./Navbar";
import NewUser from "./NewUser";

const Header = () => {
  return (
    <div className="header flex justify-between px-5 pt-2 sticky top-0 bg-white z-1 transition-all duration-300 ease-in-out">
      <div className="flex gap-20 items-center max-sm:gap-5">
        <div className="w-20 h-20 bg-red transition-transform duration-300 hover:scale-105">
          <img
            src="/images/header/logo.png"
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>
        <Navbar />
      </div>
      <NewUser />
    </div>
  );
};

export default Header;
