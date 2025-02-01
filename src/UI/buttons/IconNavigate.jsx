import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../components/context/ThemeContext";
const IconNavigate = ({ page, icon }) => {
  const { iconHandleView } = useTheme();
  return (
    <>
      <button onClick={() => iconHandleView(page)}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
};

export default IconNavigate;
