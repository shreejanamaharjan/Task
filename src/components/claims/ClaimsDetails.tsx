import { useState } from "react";
import { IClaimDetailsProps } from "../../interface/types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import ClaimsDropDown from "./ClaimsDropDown";
import { client } from "../../data/client";
import { assignedTo } from "../../data/assignTo";

const ClaimsDetails: React.FC<IClaimDetailsProps> = ({
  title,
  description,
  dropdown,
  user = false, // default value
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownSelect = (image: string, description: string) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setIsDropdownOpen(false);
  };

  // Conditionally assign data based on the `user` prop
  const data = user ? client[0] : assignedTo[0];
  const images = selectedImage || data?.image;
  const descriptions = selectedDescription || data?.description;

  const containerWidth = dropdown ? "w-45" : "w-30";

  return (
    <div className={`my-4 ${containerWidth}`}>
      <h1 className="uppercase text-xs text-gray-400">{title}</h1>
      <div className="flex items-center gap-1 my-2">
        {dropdown && (
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <img
              src={images}
              alt="user image"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <span className="text-lg text-gray-900 capitalize text-sm font-semibold ">
          {description || descriptions}
        </span>
        {dropdown && (
          <button onClick={toggleDropdown} className=" text-gray-500">
            {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        )}
      </div>
      {isDropdownOpen && (
        <ClaimsDropDown user={user} onSelect={handleDropdownSelect} />
      )}
    </div>
  );
};

export default ClaimsDetails;
