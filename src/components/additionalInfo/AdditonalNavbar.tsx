import { useState } from "react";

const AdditionalNavbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const navLinks = [
    { key: "action", label: "actions" },
    { key: "sublet", label: "sublets" },
    { key: "service", label: "services" },
    { key: "tool", label: "tools" },
    { key: "others-detail", label: "others" },
  ];
  return (
    <>
      <div className="flex gap-5 text-base text-gray-400 capitalize">
        {navLinks.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`capitalize ${
              activeTab === key
                ? "text-gray-900 font-semibold"
                : "text-gray-400"
            } hover:text-gray-900`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="border-b-1 border-gray-400 w-full mt-4"></div>
    </>
  );
};

export default AdditionalNavbar;
