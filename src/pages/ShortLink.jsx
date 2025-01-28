import {
  faChartSimple,
  faCopy,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import MainNavBar from "../UI/navbars/MainNavbar";
import TitleAS from "../UI/texts/TitleAS";
import SloganAS from "../UI/texts/SloganAS";
import Footer from "../components/Footer";
import IconNavigate from "../UI/buttons/IconNavigate";
import IconCopy from "../UI/buttons/IconCopy";
import ShortURL from "../UI/URL/ShortURL";

const ShortLink = () => {
  const copyHandler = () => {
    console.log("Copied the short link created !");
  };

  return (
    <>
      <MainNavBar icon={faChartSimple} />
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <div className="mt-12">
            <h2 className="text-sm font-light">Here is your short link:</h2>

            <ShortURL URL={"www.shortlink.com"} />
          </div>
          <div className="flex justify-around mt-4 text-base">
            <IconCopy icon={faCopy} handler={copyHandler} />
            <IconNavigate page={"/home"} icon={faRotateLeft} />
          </div>
        </div>
      </section>

      <Footer year={"2025"} />
    </>
  );
};

export default ShortLink;
