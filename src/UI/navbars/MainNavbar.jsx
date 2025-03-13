import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import IconNavigate from "../buttons/IconNavigate";
import { useTheme } from "../../components/context/ThemeContext";

const MainNavBar = () => {
  const { add } = useTheme();
  return (
    <>
      <nav className="absolute top-0 right-0 p-7">
        {add && <IconNavigate page={"/general"} icon={faChartSimple} />}
      </nav>
    </>
  );
};

export default MainNavBar;
