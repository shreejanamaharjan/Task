/* eslint-disable @typescript-eslint/no-explicit-any */
interface IInputField {
  label: string;
  type: string;
  id: string;
  register: any;
  error?: any;
}
const InputField: React.FC<IInputField> = ({
  label,
  type,
  id,
  register,
  error,
}) => {
  return (
    <div className="mb-4 relative">
      <label className="block text-lg mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        className="w-full h-10 rounded-md border border-gray-300 px-3 bg-gray-200"
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 absolute">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
