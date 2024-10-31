const Button = ({ type, disabled, className, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded ${
        disabled ? " bg-indigo-300 cursor-not-allowed" : ""
      } bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-5 cursor-pointer transition duration-300 transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button