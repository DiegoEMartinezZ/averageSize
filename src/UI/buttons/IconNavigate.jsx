import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../components/context/ThemeContext";
const IconNavigate = ({ page, icon }) => {
  const { iconHandleView } = useTheme();
  return (
    <>
      <button onClick={() => iconHandleView(page)} className="cursor-pointer">
        <FontAwesomeIcon icon={icon} className="" />
      </button>
    </>
  );
};

export default IconNavigate;
