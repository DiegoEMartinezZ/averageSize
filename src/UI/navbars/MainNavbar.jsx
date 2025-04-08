import IconNavigate from "../buttons/IconNavigate";
import { FaChartSimple } from "react-icons/fa6";

const MainNavBar = () => {
  return (
    <>
      <nav className="absolute top-0 right-0 p-7">
        <IconNavigate page={"/general"} icon={FaChartSimple} />
      </nav>
    </>
  );
};

export default MainNavBar;
