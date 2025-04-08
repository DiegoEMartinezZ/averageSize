import { useTheme } from "../../components/context/ThemeContext";

const InputEmail = ({ text }) => {
  const { handleInputSelected, handleEmail, email, inputRef, errorEmail } =
    useTheme();
  return (
    <>
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        onClick={handleInputSelected}
        ref={inputRef}
        placeholder={text}
        className={`${
          errorEmail ? "border-averagesize-red" : "border-averagesize-black"
        } border-2  bg-averagesize-green p-2 my-3 text-sm rounded-lg text-center w-56 `}
      />
    </>
  );
};

export default InputEmail;
