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
      <div className="rounded-xl bg-gray-200 p-4 my-4">
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
              <div className="bg-white p-4 rounded-xl mt-2">
                <table className="w-full table-fixed">
                  <thead className="uppercase text-sm text-gray-400 text-left h-10">
                    <tr>
                      <th style={{ width: "20%" }}>parts number</th>
                      <th style={{ width: "20%" }}>parts name</th>
                      <th>qty</th>
                      <th>wty mo</th>
                      <th>wty miles</th>
                      <th>cost per</th>
                      <th>tax per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-400 w-full"></tr>
                    <tr className="capitalize font-semibold text-sm text-gray-900 h-10">
                      <td>123456789AA</td>
                      <td>radiator</td>
                      <td>1</td>
                      <td>24</td>
                      <td>50,000</td>
                      <td>$500.00</td>
                      <td>$75.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="uppercase text-xs text-gray-900 font-semibold ml-2">
                labour
              </h1>
              <div className="bg-white p-4 rounded-xl mt-2">
                <table className="w-full table-fixed">
                  <thead className="uppercase text-sm text-gray-400 text-left h-10">
                    <tr>
                      <th style={{ width: "65%" }}>labour description</th>
                      <th>menu</th>
                      <th>hour</th>
                      <th>rate</th>
                      <th>tax(%)</th>
                      <th>tax per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-400 w-full"></tr>
                    <tr className="capitalize font-semibold text-sm text-gray-900 h-10">
                      <td>senior engineer's labour</td>
                      <td>
                        <TiTick />
                      </td>
                      <td>4</td>
                      <td>$60.00</td>
                      <td>15%</td>
                      <td>$45.00</td>
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
