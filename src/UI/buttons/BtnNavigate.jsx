import { useTheme } from "../../components/context/ThemeContext";

const BtnNavigate = ({ icon: Icon, text, page }) => {
  const { handleView } = useTheme();
  return (
    <>
      <button
        onClick={() => handleView(page)}
        className="cursor-pointer p-2 my-2 flex m-auto items-center text-sm font-medium py-1 px-2 bg-averagesize-yellow rounded-lg"
      >
        <Icon className="mr-2" />
        {text}
      </button>
    </>
  );
};

export default BtnNavigate;
