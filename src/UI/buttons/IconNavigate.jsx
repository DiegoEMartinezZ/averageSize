import { useTheme } from "../../components/context/ThemeContext";

const IconNavigate = ({ page, icon: Icon }) => {
  const { iconHandleView } = useTheme();
  return (
    <>
      <button onClick={() => iconHandleView(page)} className="cursor-pointer">
        <Icon className="mx-4" />
      </button>
    </>
  );
};

export default IconNavigate;
