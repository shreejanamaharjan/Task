interface IButton {
  label1: string;
  label2: string;
  toggleOverlay?: () => void;
  togglePayment?: () => void;
}

const Button: React.FC<IButton> = ({
  label1,
  label2,
  toggleOverlay,
  togglePayment,
}) => {
  return (
    <div className=" flex items-center gap-4 mt-4 justify-end">
      <button
        onClick={toggleOverlay}
        className="text-base capitalize font-semibold tetx-gray-900 bg-white outline-2 outline-gray-900 px-6 py-2 rounded-3xl hover:text-white hover:bg-gray-900"
      >
        {label1}
      </button>
      <button
        onClick={togglePayment}
        className="bg-black text-base py-2 px-6  capitalize text-white font-bold rounded-3xl  hover:bg-white git  hover:text-black hover:outline-2 hover:outline-black"
      >
        {label2}
      </button>
    </div>
  );
};

export default Button;
