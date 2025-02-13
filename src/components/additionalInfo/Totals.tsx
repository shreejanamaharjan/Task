const Totals = () => {
  return (
    <div className="my-4">
      <div className="text-base flex gap-2 items-center">
        <h1 className="text-gray-900 capitalize font-bold">totals</h1>
      </div>
      <div className="border-2 border-gray-400 rounded-xl overflow-hidden mt-4">
        <table className="min-w-full table-fixed">
          <thead className="uppercase text-sm text-gray-400 text-left h-10">
            <tr>
              <th className="p-4" style={{ width: "90%" }}>
                totals
              </th>
              <th className="p-4" style={{ width: "10%" }}>
                requested
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            <tr className="h-10">
              <td className="p-4">Parts totals</td>
              <td className="p-4">$2465.00</td>
            </tr>
            <tr className="w-full border-t border-gray-400"></tr>
            <tr className="h-10">
              <td className="p-4">Labour total</td>
              <td className="p-4">$1275.00</td>
            </tr>
            <tr className="h-10">
              <td className="p-4">Sublet total</td>
              <td className="p-4">$440.00</td>
            </tr>
            <tr className="h-10 font-semibold">
              <td className="p-4">Subtotal</td>
              <td className="p-4">$4180.00</td>
            </tr>
            <tr className="w-full border-t border-gray-400"></tr>
            <tr className="h-10">
              <td className="p-4">Taxes</td>
              <td className="p-4">$296.25</td>
            </tr>
            <tr className="h-10">
              <td className="p-4">Deductible for customer</td>
              <td className="p-4">-$100.00</td>
            </tr>
            <tr className="h-12 font-semibold bg-gray-200 w-full">
              <td colSpan={2} className="p-4 text-gray-900 w-full">
                Total: <span className="float-right">$4326.25</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Totals;
