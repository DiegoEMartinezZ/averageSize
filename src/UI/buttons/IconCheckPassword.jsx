import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTheme } from "../../components/context/ThemeContext";

const IconCheckPassword = ({ handle, check }) => {
  return (
    <>
      <button
        type="button"
        onClick={handle}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        {check ? <FaEyeSlash /> : <FaEye />}
      </button>
    </>
  );
};

export default IconCheckPassword;
