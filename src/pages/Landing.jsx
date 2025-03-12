import { faChartSimple, faLink } from "@fortawesome/free-solid-svg-icons";
import TitleAS from "../UI/texts/TitleAS";
import SloganAS from "../UI/texts/SloganAS";
import BtnNavigate from "../UI/buttons/BtnNavigate";
import Footer from "../components/Footer";
import MainNavBar from "../UI/navbars/MainNavbar";
const Landing = () => {
  return (
    <>
      <MainNavBar icon={faChartSimple} />
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <BtnNavigate page={"/home"} icon={faLink} text={"Start"} />
        </div>
      </section>
      <Footer year={"2025"} />
    </>
  );
};

export default Landing;
