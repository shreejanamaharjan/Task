const Customer = () => {
  const detailData = [
    { label: "contract", description: "123456987895" },
    { label: "deductible", description: "$100" },
    { label: "vehicle", description: "2022 Dodge Ram Pickup" },
    { label: "total claims", description: "1" },
    { label: "term", description: "60 mo./100.000mi" },
    { label: "vin", description: "11254785968547895" },
  ];
  return (
    <div className="my-4">
      <div className="text-base flex gap-2 items-center">
        <h1 className="text-gray-900 capitalize font-bold">customer</h1>
      </div>
      <div className="flex items-center justify-between mt-4 border-2 border-gray-400 p-4 rounded-xl">
        <div style={{ width: "20%" }}>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="/images/claims/user.jpg"
              alt="customer profile"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="capitalize font-semibold text-base text-gray-900">
            jhon doe
          </h1>
          <div className="bg-gray-200 rounded-2xl p-1 flex justify-center w-15">
            <span className="capitalize text-green-500 text-xs">active</span>
          </div>
        </div>
        <div style={{ width: "70%" }} className="flex flex-wrap gap-4">
          {detailData.map((item, index) => (
            <div key={index} className="w-50">
              <h1 className="text-gray-400 uppercase text-xs font-semibold">
                {item.label}
              </h1>
              <span className="text-gray-900 text-base font-semibold capitalize">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
