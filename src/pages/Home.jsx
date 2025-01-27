import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import BtnNavigate from "../UI/buttons/BtnNavigate";
import MainNavBar from "../UI/navbars/MainNavbar";
import SloganAS from "../UI/texts/SloganAS";
import TitleAS from "../UI/texts/TitleAS";
import Footer from "../components/Footer";
import { useRef, useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("www.example.com");
  const inputRef = useRef(null);
  const handleInputSelected = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };
  return (
    <>
      <MainNavBar icon={faChartSimple} />
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <div className="mt-12">
            <label className="text-sm font-light">
              Paste your long link here:
            </label>
            <input
              id="url"
              name="url"
              type="url"
              value={url}
              className="border-1 py-1 px-2 my-2 w-60 rounded-lg text-center "
              onClick={handleInputSelected}
            />
          </div>
          <BtnNavigate page={"/short"} text={"Make it Short !"} />
        </div>
      </section>

      <Footer year={"2025"} />
    </>
  );
};

export default Home;
