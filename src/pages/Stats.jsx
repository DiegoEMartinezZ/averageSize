import BtnNavigate from "../UI/buttons/BtnNavigate";
import Footer from "../components/Footer";
import IconNavigate from "../UI/buttons/IconNavigate";
import Count from "../UI/lists/Count";
import Date from "../UI/lists/Date";
import PageView from "../UI/texts/PageView";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiChartBarThin } from "react-icons/pi";
import MainTitle from "../UI/texts/MainTitle";

const Stats = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <PageView icon={PiChartBarThin} text={"General Stats"} />
          <MainTitle version={"v1.0.0"} />

          <BtnNavigate icon={CiSearch} page={"/links"} text={"Show My Links"} />
          <ul className="my-8 -mx-8">
            <Count text={"Total times clicked"} count={0} />
            <Count text={"Short links created"} count={0} />
            <Count text={"Unique visitors"} count={0} />
            <Date text={"Last Created"} date={"DD-MM-YYYY"} />
            <Date text={"Last Updated"} date={"DD-MM-YYYY"} />
          </ul>
          <IconNavigate page={"/home"} icon={IoIosArrowBack} />
        </div>
        <Footer year={2025} />
      </section>
    </>
  );
};

export default Stats;
