import MainNavBar from "../UI/navbars/MainNavbar";
import SloganAS from "../UI/texts/SloganAS";
import Footer from "../components/Footer";
import IconNavigate from "../UI/buttons/IconNavigate";
import IconCopy from "../UI/buttons/IconCopy";
import Copied from "../UI/alerts/Copied";
import { useTheme } from "../components/context/ThemeContext";
import IconCRUD from "../UI/buttons/IconCRUD";
import { CiCirclePlus, CiCircleCheck } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import MainTitle from "../UI/texts/MainTitle";
import CreateNewLink from "../UI/URL/createNewLink";
const NewLink = () => {
  const { copied, copyHandler, addHandler, addMessage } = useTheme();

  return (
    <>
      <MainNavBar />
      {copied && (
        <Copied icon={CiCircleCheck} text={"Link copied to clipboard! "} />
      )}
      <section className="flex items-center justify-center h-screen bg-averagesize-white">
        <div className="p-6 text-center">
          <MainTitle version={"V1.0.0"} />
          <div className="mt-12">
            <SloganAS text={"Here is your new link :)"} />
            <CreateNewLink />
          </div>
          <div className="flex items-center justify-around mt-3 mx-16  text-base">
            <IconCRUD icon={CiCirclePlus} CRUD={addHandler} />
            <IconCopy icon={IoCopyOutline} handler={copyHandler} />
            <IconNavigate icon={IoIosArrowBack} page={"/home"} />
          </div>
          {addMessage && (
            <Copied icon={FaChartSimple} text={"Check your links :)"} />
          )}
        </div>
      </section>

      <Footer year={"2025"} />
    </>
  );
};

export default NewLink;
