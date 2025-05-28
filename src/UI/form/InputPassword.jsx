import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useTheme } from "../../components/context/ThemeContext";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const InputPassword = ({ text }) => {
  const {
    handleInputSelected,
    password,
    handlePassword,
    showPassword,
    setShowPassword,
    errorPassword,
  } = useTheme();

  const handleCheckPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePassword}
          placeholder={text}
          onClick={handleInputSelected}
          autoComplete="new-password"
          required
          className={`${
            errorPassword
              ? "border-averagesize-red"
              : "border-averagesize-black"
          } border-2  bg-averagesize-green p-2 my-1 text-sm rounded-lg text-center w-56 `}
        />
        <button
          type="button"
          onClick={handleCheckPassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
    </>
  );
};

export default InputPassword;
