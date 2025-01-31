import {
  faChartSimple,
  faCheck,
  faCopy,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import MainNavBar from "../UI/navbars/MainNavbar";
import TitleAS from "../UI/texts/TitleAS";
import SloganAS from "../UI/texts/SloganAS";
import Footer from "../components/Footer";
import IconNavigate from "../UI/buttons/IconNavigate";
import IconCopy from "../UI/buttons/IconCopy";
import ShortURL from "../UI/URL/URL";
import { useState } from "react";
import Copied from "../UI/alerts/Copied";

const ShortLink = () => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("www.shortLink.com");

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("failed to copy text:", error);
    }
  };

  return (
    <>
      <MainNavBar icon={faChartSimple} />
      {copied && <Copied icon={faCheck} text={"URL copied to clipboard! "} />}
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <div className="mt-12">
            <h2 className="text-sm font-light">Here is your short link:</h2>
            <ShortURL URL={"www.shortlink.com"} />
          </div>

          <div className="flex items-center justify-around mt-1 mx-8 text-base">
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
