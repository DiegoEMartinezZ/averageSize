import BtnNavigate from "../UI/buttons/BtnNavigate";
import SloganAS from "../UI/texts/SloganAS";
import TitleAS from "../UI/texts/TitleAS";
import {
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import IconNavigate from "../UI/buttons/IconNavigate";
import Count from "../UI/lists/Count";
import Date from "../UI/lists/Date";
import PageView from "../UI/texts/PageView";

const Stats = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <PageView text={"General Stats"} />
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <BtnNavigate
            icon={faMagnifyingGlass}
            page={"/links"}
            text={"Show All Links"}
          />
          <ul className="my-8 -mx-8">
            <Count text={"Total times clicked"} count={0} />
            <Count text={"Short links created"} count={0} />
            <Count text={"Unique visitors"} count={0} />
            <Date text={"Last Created"} date={"DD-MM-YYYY"} />
            <Date text={"Last Updated"} date={"DD-MM-YYYY"} />
          </ul>
          <IconNavigate page={"/"} icon={faChevronLeft} />
        </div>
        <Footer year={2025} />
      </section>
    </>
  );
};

export default Stats;
