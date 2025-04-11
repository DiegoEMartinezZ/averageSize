import IconNavigate from "../buttons/IconNavigate";
import BtnLogout from "../buttons/BtnLogout";
import { PiChartBarThin } from "react-icons/pi";
import { useTheme } from "../../components/context/ThemeContext";

const MainNavBar = () => {
  const { localUserDB, userIdx } = useTheme();
  return (
    <>
      <nav className="absolute top-0 right-0 p-7 flex justify-around items-center">
        <BtnLogout />
        {localUserDB[userIdx].links.length > 0 && (
          <IconNavigate page={"/general"} icon={PiChartBarThin} />
        )}
      </nav>
    </>
  );
};

export default MainNavBar;
