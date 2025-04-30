import IconNavigate from "../buttons/IconNavigate";
import BtnLogout from "../buttons/BtnLogout";
import { PiChartBarThin } from "react-icons/pi";

const MainNavBar = () => {
  return (
    <>
      <nav className="absolute top-0 right-0 p-7 flex justify-around items-center">
        <BtnLogout />
        <IconNavigate page={"/general"} icon={PiChartBarThin} />
      </nav>
    </>
  );
};

export default MainNavBar;
