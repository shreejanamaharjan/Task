import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import ButtonContext from "../../context/Context";

const NewUser = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(ButtonContext);
  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleShowLogout = () => {
    setShowLogout((prev) => !prev);
  };
  const handleLogout = () => {
    setLoading(true);
    dispatch({
      type: "LOGOUT",
    });
    localStorage.removeItem("access-token");
    window.location.reload();
  };
  return (
    <div className="flex gap-10 items-center ">
      <div className="relative">
        <div className="flex gap-1" onClick={handleShowLogout}>
          <div className="w-8 h-8 rounded-full overflow-hidden max-sm:hidden">
            <img
              src="/images/header/profile.webp"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="capitalize text-xs max-sm:hidden ">
            <h1 className="text-gray-900">jhon doe</h1>
            <span className="text-gray-400">ford service</span>
          </div>
        </div>
        {showLogout && (
          <div
            className="border border-gray-400 p-2 absolute "
            onClick={handleLogout}
          >
            <span className="uppercase text-sm font-semibold text-gray-900">
              {loading ? "logging out..." : " logout"}
            </span>
          </div>
        )}
      </div>
      <button className="flex gap-2 items-center bg-black hover:bg-white text-base text-white font-bold py-2 px-6 rounded-3xl capitalize  hover:text-black hover:outline-2 hover:outline-black max-sm:hidden">
        <FaPlus />
        new
      </button>
      <div className="relative">
        <IoMenu
          className=" min-sm:hidden text-2xl bg-white z-2"
          onClick={handleMenu}
        />
        {showMenu && (
          <div className="absolute right-0 p-4 border border-gray-400 rounded-xl min-sm:hidden">
            <div className="flex gap-1">
              <div className="w-5 h-5 rounded-full overflow-hidden ">
                <img
                  src="/images/header/profile.webp"
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="capitalize text-xs  ">
                <h1 className="text-gray-900">jhon doe</h1>
              </div>
            </div>
            <button className=" mt-2 flex gap-2 items-center bg-black hover:bg-white text-sm text-white font-bold py-1 px-3 rounded-3xl capitalize  hover:text-black hover:outline-2 hover:outline-black">
              <FaPlus />
              new
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewUser;
