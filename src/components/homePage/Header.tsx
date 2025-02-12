import Navbar from "./Navbar";
import NewUser from "./NewUser";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-2 sticky top-0 bg-white z-1">
      <div className="flex gap-20 items-center">
        <div className="w-20 h-20 bg-red">
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
