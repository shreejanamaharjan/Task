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
      <div className="flex items-center justify-between mt-4 max-[980px]:block">
        {detailData.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-400 w-[24%] rounded-xl p-3 max-[980px]:w-full  max-[980px]:mb-8"
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
