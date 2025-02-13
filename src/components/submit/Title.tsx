import { IoClose } from "react-icons/io5";

interface ITitle {
  title: string;
  description: string;
  toggleOverlay?: () => void;
}

const Title: React.FC<ITitle> = ({ title, description, toggleOverlay }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
        <IoClose onClick={toggleOverlay} />
      </div>
      <p className="text-gray-900 text-sm">{description}</p>
    </div>
  );
};

export default Title;
