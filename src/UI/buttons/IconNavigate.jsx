import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const IconNavigate = ({ page, icon }) => {
  const navigate = useNavigate();
  const handlerPage = () => {
    navigate(page);
  };
  return (
    <>
      <button onClick={handlerPage}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
};

export default IconNavigate;
