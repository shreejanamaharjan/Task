import { subletData } from "../../data/sublets";

const Sublets = () => {
  return (
    <div className="my-4">
      <div className="text-base flex gap-2 items-center">
        <h1 className="text-gray-900 capitalize font-bold">sublets</h1>
        <span className="text-gray-400 font-semibold">$250.00</span>
      </div>
      <div className="my-4 border-t-2 border-l-2 border-r-2 border-gray-400 rounded-xl ">
        <table className="w-full table-fixed ">
          <thead className="uppercase text-sm text-gray-400 text-left h-10">
            <tr>
              <th className="p-4" style={{ width: "50%" }}>
                name of the sublets
              </th>
              <th className="p-4" style={{ width: "10%" }}>
                qty
              </th>
              <th className="p-4" style={{ width: "30%" }}>
                cost per
              </th>
              <th className="p-4" style={{ width: "10%" }}>
                requested
              </th>
            </tr>
          </thead>
          <tbody className="font-semibold text-gray-900">
            <tr className="w-full border-t border-gray-400 h-4"></tr>
            {subletData.map((item, index) => (
              <tr key={index} className="h-8">
                <td className="p-4">{item.sublet}</td>
                <td className="p-4">{item.quantity}</td>
                <td className="p-4">${item.costPer.toFixed(2)}</td>
                <td className="p-4">
                  ${(item.quantity * item.costPer).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sublets;
