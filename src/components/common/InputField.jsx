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
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        className={`
          flex items-center rounded-lg px-3 py-2 bg-white border
          border-orange-400 transition-all duration-300
          focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-300
          ${error ? "border-red-500 focus-within:ring-red-300" : ""}
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
            className="w-full bg-white outline-none text-gray-800 placeholder-gray-400 resize-none"
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
            className="w-full bg-white outline-none text-gray-800 placeholder-gray-400"
          />
        )}
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
