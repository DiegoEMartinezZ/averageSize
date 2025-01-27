import { useNavigate } from "react-router-dom";
const BtnNavigate = ({ page, text }) => {
  const navigate = useNavigate();
  const handlerPage = () => {
    navigate(page);
  };
  return (
    <>
      <button
        onClick={handlerPage}
        className="cursor-pointer text-sm font-medium m-2 py-1 px-2 bg-green-300  rounded-lg"
      >
        {text}
      </button>
    </>
  );
};

export default BtnNavigate;
