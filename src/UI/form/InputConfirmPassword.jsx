import { IoMdClose } from "react-icons/io";
import { useTheme } from "../../components/context/ThemeContext";
import Errors from "../alerts/Errors";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const InputConfirmPassword = ({ text }) => {
  const {
    handleInputSelected,
    confirmPassword,
    handleConfirmPassword,
    errorPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useTheme();

  const handleCheckPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="relative flex items-center">
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={handleConfirmPassword}
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
          {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
      {errorPassword && <Errors icon={IoMdClose} text={errorPassword} />}
    </>
  );
};

export default InputConfirmPassword;
