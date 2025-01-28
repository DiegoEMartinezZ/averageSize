import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const BtnNavigate = ({ page, icon, text }) => {
  const navigate = useNavigate();
  const handlerPage = () => {
    navigate(page);
  };
  return (
    <>
      <button
        onClick={handlerPage}
        className="cursor-pointer p-2 my-2 flex m-auto items-center text-sm font-medium py-1 px-2 bg-green-300  rounded-lg"
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {text}
      </button>
    </>
  );
};

export default BtnNavigate;
