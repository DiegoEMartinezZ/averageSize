import { FaUserPlus } from "react-icons/fa";
import { useTheme } from "../../components/context/ThemeContext";

const BtnRegister = ({ text, page }) => {
  const { handleView } = useTheme();
  return (
    <>
      <button
        onClick={() => handleView(page)}
        className="cursor-pointer text-xs bg-averagesize-blue py-1 px-2 m-auto rounded-lg flex justify-center items-center"
      >
        <FaUserPlus className="mr-1" />
        <h1> {text} </h1>
      </button>
    </>
  );
};

export default BtnRegister;
