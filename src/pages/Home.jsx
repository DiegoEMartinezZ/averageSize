import {
  faChartSimple,
  faScissors,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import BtnNavigate from "../UI/buttons/BtnNavigate";
import MainNavBar from "../UI/navbars/MainNavbar";
import SloganAS from "../UI/texts/SloganAS";
import TitleAS from "../UI/texts/TitleAS";
import Footer from "../components/Footer";
import Errors from "../UI/alerts/Errors";
import { useTheme } from "../components/context/ThemeContext";
import Label from "../UI/form/Label";

const Home = () => {
  const {
    bigLink,
    inputRef,
    handleInputSelected,
    newURL,
    handleSubmit,
    error,
  } = useTheme();

  return (
    <>
      <MainNavBar icon={faChartSimple} />
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <form onSubmit={handleSubmit}>
            <div className="mt-12">
              <Label text={"Paste the URL to change the size:"} />
              <input
                type="text"
                value={bigLink}
                ref={inputRef}
                onChange={newURL}
                onClick={handleInputSelected}
                placeholder="www.example-of-a-long-link.com"
                className={`${
                  error ? "border-red-400" : "border-black"
                } border-1 py-1 px-2 w-64 mt-1 mb-3 text-sm rounded-lg text-center`}
              />
            </div>
            <BtnNavigate
              type="submit"
              icon={faScissors}
              text={"Make it Short !"}
            />
            {error && <Errors icon={faX} text={error} />}
          </form>
        </div>
      </section>
      <Footer year={"2025"} />
    </>
  );
};

export default Home;
