import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import IconNavigate from "../buttons/IconNavigate";

const MainNavBar = () => {
  return (
    <>
      <nav className="absolute top-0 right-0 p-7">
        <IconNavigate page={"/stats"} icon={faChartSimple} />
      </nav>
    </>
  );
};

export default MainNavBar;
