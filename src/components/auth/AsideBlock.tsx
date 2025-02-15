interface IAsideBlock {
  title: string;
  buttonText: string;
  onClick: () => void;
}

const AsideBlock: React.FC<IAsideBlock> = ({ title, onClick, buttonText }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-white text-2xl mb-4">{title}</h2>
      <button
        onClick={onClick}
        className="px-6 py-2 border-2 border-white rounded-full text-white text-lg uppercase"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AsideBlock;
