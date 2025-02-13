import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TiMinus, TiTick } from "react-icons/ti";

const Services = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleShowSubMenu = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <div className="my-4">
      <div className="text-base flex gap-2 items-center">
        <h1 className="text-gray-900 capitalize font-bold">services</h1>
        <span className="text-gray-400 font-semibold">$1400.00</span>
      </div>
      <div className="rounded-xl bg-gray-200 p-4 my-4 border-2 border-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 bg-white rounded border border-gray-300 flex items-center justify-center cursor-pointer"
              onClick={handleShowMenu}
            >
              {showMenu ? <TiMinus /> : <FaPlus />}
            </div>
            <p className="text-sm font-semibold text-gray-900 capitalize">
              engine overheating
            </p>
            <span className="text-sm font-semibold text-gray-400">$250.00</span>
          </div>
          <div className="text-sm font-semibold text-gray-400 capitalize">
            <h1
              className={`${
                showMenu
                  ? "border-none"
                  : "border-b-2 border-gray-400 border-dashed"
              }`}
            >
              complaint, cause, correction
            </h1>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showMenu ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 bg-white rounded border border-gray-300 flex items-center justify-center cursor-pointer"
                onClick={handleShowSubMenu}
              >
                {showSubMenu ? <TiMinus /> : <FaPlus />}
              </div>
              <p className="text-sm font-semibold text-gray-900 capitalize">
                engine overheating
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showSubMenu
                ? "max-h-screen opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4">
              <h1 className="uppercase text-xs text-gray-900 font-semibold ml-2">
                parts
              </h1>
              <div className="bg-white rounded-xl mt-2">
                <table className="w-full table-fixed">
                  <thead className="uppercase text-sm text-gray-400 text-left h-10 ">
                    <tr>
                      <th style={{ width: "20%" }} className="p-4">
                        parts number
                      </th>
                      <th style={{ width: "20%" }} className="p-4">
                        parts name
                      </th>
                      <th className="p-4">qty</th>
                      <th className="p-4">wty mo</th>
                      <th className="p-4">wty miles</th>
                      <th className="p-4">cost per</th>
                      <th className="p-4">tax per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-400 w-full"></tr>
                    <tr className="capitalize font-semibold text-sm text-gray-900 h-10">
                      <td className="p-4">123456789AA</td>
                      <td className="p-4">radiator</td>
                      <td className="p-4">1</td>
                      <td className="p-4">24</td>
                      <td className="p-4">50,000</td>
                      <td className="p-4">$500.00</td>
                      <td className="p-4">$75.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="uppercase text-xs text-gray-900 font-semibold ml-2">
                labour
              </h1>
              <div className="bg-white rounded-xl mt-2">
                <table className="w-full table-fixed">
                  <thead className="uppercase text-sm text-gray-400 text-left h-10">
                    <tr>
                      <th className="p-4" style={{ width: "65%" }}>
                        labour description
                      </th>
                      <th className="p-4">menu</th>
                      <th className="p-4">hour</th>
                      <th className="p-4">rate</th>
                      <th className="p-4">tax(%)</th>
                      <th className="p-4">tax per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-400 w-full"></tr>
                    <tr className="capitalize font-semibold text-sm text-gray-900 h-10">
                      <td className="p-4">senior engineer's labour</td>
                      <td className="p-4">
                        <TiTick />
                      </td>
                      <td className="p-4">4</td>
                      <td className="p-4">$60.00</td>
                      <td className="p-4">15%</td>
                      <td className="p-4">$45.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
