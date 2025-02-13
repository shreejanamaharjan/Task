import { FaCircle } from "react-icons/fa6";
import { statusDetails } from "../../data/status";

const PaymentStatus = () => {
  return (
    <div className="my-8 border-2 border-gray-400 rounded-lg">
      <table className="w-full table-fixed">
        <thead className="uppercase text-sm text-gray-400 text-left">
          <tr>
            <th className="px-4 py-2">status</th>
            <th className="px-4 py-2">details</th>
            <th className="px-4 py-2 text-right">additional/action</th>
          </tr>
        </thead>
        <tbody>
          {statusDetails.map((item, index) => (
            <tr key={index} className="w-full h-15 border-t-1 border-gray-400">
              <td className="flex gap-2 items-center px-4 py-2 text-left text-gray-900 capitalize">
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
              <td className="text-left px-4 py-2 text-gray-400 text-base font-semibold">
                {item.details}
              </td>
              <td className="text-right px-4 py-2">
                {!item.day && (
                  <button className="bg-black hover:bg-white text-base text-white font-bold py-2 px-6 rounded-3xl capitalize hover:bg-white git  hover:text-black hover:outline-2 hover:outline-black">
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
  );
};

export default PaymentStatus;
