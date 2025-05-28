import { useTheme } from "../../components/context/ThemeContext";

const InputName = ({ text }) => {
  const { handleInputSelected, handleName, name, errorName } = useTheme();
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleName}
        onClick={handleInputSelected}
        placeholder={text}
        autoComplete="name"
        required
        className={`${
          errorName ? "border-averagesize-red" : "border-averagesize-black"
        } border-2  bg-averagesize-green p-2 my-1 text-sm rounded-lg text-center w-56 `}
      />
    </>
  );
};

export default InputName;
