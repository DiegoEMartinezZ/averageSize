import {
  faChartSimple,
  faCheck,
  faCopy,
  faRotateLeft,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import MainNavBar from "../UI/navbars/MainNavbar";
import TitleAS from "../UI/texts/TitleAS";
import SloganAS from "../UI/texts/SloganAS";
import Footer from "../components/Footer";
import IconNavigate from "../UI/buttons/IconNavigate";
import IconCopy from "../UI/buttons/IconCopy";
import ShortURL from "../UI/URL/ShortURL";
import Copied from "../UI/alerts/Copied";
import { useTheme } from "../components/context/ThemeContext";
import SmallTxt from "../UI/texts/SmallTxt";
import Subtitle from "../UI/texts/Subtitle";
import IconCRUD from "../UI/buttons/IconCRUD";

const ShortLink = () => {
  const { copied, copyHandler, addHandler, addMessage } = useTheme();

  return (
    <>
      <MainNavBar icon={faChartSimple} />
      {copied && <Copied icon={faCheck} text={"URL copied to clipboard! "} />}
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <div className="mt-12">
            <Subtitle txt={"Here is your new link!"} />
            <SmallTxt
              txt={
                "Copy this link in your social networks, posts, messages and more :)"
              }
            />
            <ShortURL URL={"www.shortlink.com"} />
          </div>

          <div className="flex items-center justify-around mt-3 mx-16  text-base">
            <IconCRUD icon={faSquarePlus} CRUD={addHandler} />
            <IconCopy icon={faCopy} handler={copyHandler} />
            <IconNavigate page={"/home"} icon={faRotateLeft} />
          </div>
          {addMessage && (
            <Copied icon={faChartSimple} text={"Check your links :)"} />
          )}
        </div>
      </section>

      <Footer year={"2025"} />
    </>
  );
};

export default ShortLink;
