const Input = ({ value, handleChange, handleClick, placeholder, error }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        placeholder={placeholder}
        className={`${
          { error } ? "border-red-400" : "border-black"
        } border-1 py-1 px-2 w-64 mt-1 mb-3 text-sm rounded-lg text-center`}
      />
    </>
  );
};

export default Input;
