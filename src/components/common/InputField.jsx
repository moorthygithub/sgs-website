const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  startIcon,
  error,
  rows = 4,
  required,
  ref,
  maxLength,
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      <div
        className={`flex items-center rounded-md px-3 py-2 bg-white border border-gray-300 
          hover:border-gray-400 hover:shadow-sm 
          focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(255,153,0,0.3)]
          ${
            error ? "border-red-500 shadow-[0_0_0_2px_rgba(239,68,68,0.2)]" : ""
          }
          border-l-[3px] border-l-orange-500
        `}
      >
        {startIcon && (
          <span className="mr-2 text-gray-500 text-lg">{startIcon}</span>
        )}

        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            ref={ref}
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
            maxLength={maxLength}
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
          />
        )}
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
