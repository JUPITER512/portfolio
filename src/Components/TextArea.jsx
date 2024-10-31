const Textarea = ({
  id,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  className,
}) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`shadow border border-gray-300 dark:border-gray-700 rounded w-full py-3 px-4 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 transition-all duration-300 placeholder-gray-400 ${className}`}
    />
  );
};

export default Textarea