import { FaPlus } from "react-icons/fa6";

const NewUser = () => {
  return (
    <div className="flex gap-10 items-center">
      <div className="flex gap-1">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="/images/header/profile.webp"
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="capitalize text-xs">
          <h1 className="text-gray-900">jhon doe</h1>
          <span className="text-gray-400">ford service</span>
        </div>
      </div>
      <button className="flex gap-2 items-center bg-black hover:bg-white text-base text-white font-bold py-2 px-6 rounded-3xl capitalize hover:bg-white hover:text-black hover:outline-2 hover:outline-black">
        <FaPlus />
        new
      </button>
    </div>
  );
};

export default NewUser;
