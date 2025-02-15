import { FaCircle } from "react-icons/fa6";
import { statusDetails } from "../../data/status";
import { useContext, useEffect } from "react";
import ButtonContext from "../../context/Context";
import Submit from "../submit/Submit";

const PaymentStatus = () => {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error("BooleanComponent must be used within a BooleanProvider");
  }

  const { showOverlay, toggleOverlay } = context;
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showOverlay]);
  return (
    <>
      <div className="my-8 border-2 border-gray-400 rounded-lg overflow-x-scroll">
        <table className="min-w-full table-fixed max-w-5xl:text-sm ">
          <thead className="uppercase text-sm text-gray-400 text-left max-lg:text-xs">
            <tr>
              <th className="px-4 py-2">status</th>
              <th className="px-4 py-2 max-md:hidden">details</th>
              <th className="px-4 py-2 text-right">additional/action</th>
            </tr>
          </thead>
          <tbody className="max-lg:text-xs">
            {statusDetails.map((item, index) => (
              <tr
                key={index}
                className="w-full h-15 border-t-1 border-gray-400"
              >
                <td className="flex gap-2 items-center px-4 py-2 text-left text-gray-900 capitalize max-lg:text-xs">
                  <FaCircle
                    className={
                      item.status === "authorized"
                        ? "text-green-500"
                        : item.status === "pending"
                        ? "text-orange-500"
                        : "text-gray-900"
                    }
                  />
                  {item.status}
                </td>
                <td className="text-left px-4 py-2 text-gray-400 text-base font-semibold max-lg:text-xs max-md:hidden">
                  {item.details}
                </td>
                <td className="text-right px-4 py-2">
                  {!item.day && (
                    <button
                      onClick={toggleOverlay}
                      className="bg-black  text-base text-white font-bold py-2 px-6 rounded-3xl capitalize hover:bg-white git  hover:text-black hover:outline-2 hover:outline-black max-lg:text-xs"
                    >
                      Submit for payment
                    </button>
                  )}
                  {item.day && (
                    <div className="flex items-center justify-end">
                      <span className="font-semibold text-gray-400">
                        Approx. to approve:
                      </span>
                      <span className="ml-2 text-gray-900">
                        {item.day} business day
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showOverlay && (
        <div
          className="fixed top-0 right-0 h-full w-full z-999"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <Submit />
        </div>
      )}
    </>
  );
};

export default PaymentStatus;
