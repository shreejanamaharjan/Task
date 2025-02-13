const OtherDetails = () => {
  const detailData = [
    { label: "arrived", description: "towed" },
    { label: "commercial use", description: "no" },
    { label: "physical damage", description: "no" },
    { label: "modifications", description: "oversize wheels" },
  ];
  return (
    <div className="my-4">
      <div className="text-base flex gap-2 items-center">
        <h1 className="text-gray-900 capitalize font-bold">other details</h1>
      </div>
      <div className="flex items-center justify-between mt-4">
        {detailData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 w-65 rounded-xl p-3"
          >
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
  );
};

export default OtherDetails;
