import { useState, useEffect, useRef, useContext } from "react";
import ButtonContext from "../../context/Context";
import Submit from "../submit/Submit";

const AdditionalNavbar = () => {
  const [activeTab, setActiveTab] = useState("action");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const navbarOffset = useRef<number | null>(null); // Stores initial navbar position
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error("BooleanComponent must be used within a BooleanProvider");
  }

  const { showOverlay, toggleOverlay } = context;

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop =
          navbarRef.current.getBoundingClientRect().top + window.scrollY;

        // Save the original position of the navbar when component mounts
        if (navbarOffset.current === null) {
          navbarOffset.current = navbarTop;
        }

        // Make sticky only when it reaches the top, remove when scrolled back down
        setIsSticky(window.scrollY >= navbarOffset.current);
      }

      // Update active section on scroll
      const sectionIds = [
        "action",
        "sublets",
        "services",
        "totals",
        "other-details",
      ];
      let currentSection = "action"; // Default section

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        console.log(section);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 300) {
            currentSection = id;
          }
        }
      }
      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "action", label: "actions" },
    { key: "sublets", label: "sublets" },
    { key: "services", label: "services" },
    { key: "totals", label: "totals" },
    { key: "other-details", label: "others" },
  ];

  return (
    <>
      <div
        ref={navbarRef}
        className={`bg-white transition-all duration-300 z-10 ${
          isSticky
            ? "fixed top-0 w-full pt-4 flex gap-80 pr-4 items-center max-[1270px]:gap-40 max-[1110px]:gap-10"
            : ""
        }`}
      >
        <div className="flex gap-5 text-base text-gray-400 capitalize  p-4 max-sm:gap-1 max-sm:text-xs">
          {navLinks.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                document
                  .getElementById(key)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`capitalize px-4 py-2 ${
                activeTab === key
                  ? "text-gray-900 font-semibold rounded-md border-b-4 border-gray-900"
                  : "text-gray-400"
              } hover:text-gray-900`}
            >
              {label}
            </button>
          ))}
        </div>
        {isSticky && (
          <button
            onClick={toggleOverlay}
            className="bg-black  w-60 text-base text-white font-bold py-2 px-6 rounded-3xl capitalize hover:bg-white hover:text-black hover:outline-2 hover:outline-black max-[1000px]:hidden"
          >
            Submit for payment
          </button>
        )}
      </div>
      <div className="border-b border-gray-400 w-full mt-4"></div>
      {showOverlay && (
        <div
          className="fixed top-0 right-0 h-lvh w-full z-999"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <Submit />
        </div>
      )}
    </>
  );
};

export default AdditionalNavbar;
