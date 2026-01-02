export type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  name?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder, name }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-gray-500"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
    </div>
  );
};
