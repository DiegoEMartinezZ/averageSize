import {
  faChartSimple,
  faCopy,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import MainNavBar from "../UI/navbars/MainNavbar";
import TitleAS from "../UI/texts/TitleAS";
import SloganAS from "../UI/texts/SloganAS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";

const ShortLink = () => {
  return (
    <>
      <MainNavBar icon={faChartSimple} />
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <div className="mt-12">
            <h2 className="text-sm font-light">Here is your short link:</h2>
            <h1 className="bg-green-200 font-medium p-2 mt-1 rounded-lg border-1 px-6 text-center">
              ESTE ES EL LINK CORTO
            </h1>
          </div>
          <div className="flex justify-around mt-4 text-base">
            <FontAwesomeIcon icon={faCopy} />
            <FontAwesomeIcon icon={faRotateLeft} />
          </div>
        </div>
      </section>

      <Footer year={"2025"} />
    </>
  );
};

export default ShortLink;
