import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import ButtonContext from "../../context/Context";
import axiosInstance from "../../utils/axiosInstance";

interface IUserDetail {
  _id: string;
  username: string;
  email: string;
}

const fetchUser = async (
  userId: string | null
): Promise<IUserDetail | null> => {
  if (!userId) return null;
  const response = await axiosInstance.get(`/user/${userId}`);
  return response.data.userData;
};

const NewUser = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(ButtonContext);
  const userId = state.userId || localStorage.getItem("userId");

  // Fetch user data with React Query
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userDetail", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId, // Fetch only if userId exists
  });

  const handleMenu = () => setShowMenu((prev) => !prev);
  const handleShowLogout = () => setShowLogout((prev) => !prev);

  const handleLogout = () => {
    setLoading(true);
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userId");
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    window.location.reload();
  };

  return (
    <div className="flex gap-10 items-center">
      <div className="relative">
        <div className="flex gap-1 cursor-pointer" onClick={handleShowLogout}>
          <div className="w-8 h-8 rounded-full overflow-hidden max-sm:hidden">
            <img
              src="/images/header/profile.webp"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="capitalize text-xs max-sm:hidden">
            <h1 className="text-gray-900">
              {isLoading
                ? "Loading..."
                : error
                ? "Error"
                : user?.username || "Guest"}
            </h1>
            <span className="text-gray-400">ford service</span>
          </div>
        </div>
        {showLogout && (
          <div
            className="border border-gray-400 p-2 absolute bg-white"
            onClick={handleLogout}
          >
            <span className="uppercase text-sm font-semibold text-gray-900">
              {loading ? "Logging out..." : "Logout"}
            </span>
          </div>
        )}
      </div>
      <button className="flex gap-2 items-center bg-black hover:bg-white text-base text-white font-bold py-2 px-6 rounded-3xl capitalize hover:text-black hover:outline-2 hover:outline-black max-sm:hidden">
        <FaPlus />
        new
      </button>
      <div className="relative">
        <IoMenu
          className="min-sm:hidden text-2xl bg-white z-2 cursor-pointer"
          onClick={handleMenu}
        />
        {showMenu && (
          <div className="absolute right-0 p-4 border border-gray-400 rounded-xl min-sm:hidden bg-white">
            <div className="flex gap-1">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src="/images/header/profile.webp"
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="capitalize text-xs">
                <h1 className="text-gray-900">{user?.username || "Guest"}</h1>
              </div>
            </div>
            <button className="mt-2 flex gap-2 items-center bg-black hover:bg-white text-sm text-white font-bold py-1 px-3 rounded-3xl capitalize hover:text-black hover:outline-2 hover:outline-black">
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
