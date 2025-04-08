import BtnNavigate from "../UI/buttons/BtnNavigate";
import MainNavBar from "../UI/navbars/MainNavbar";
import SloganAS from "../UI/texts/SloganAS";
import Footer from "../components/Footer";
import Errors from "../UI/alerts/Errors";
import { useTheme } from "../components/context/ThemeContext";
import Label from "../UI/form/Label";
import { LuScissors } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import MainTitle from "../UI/texts/MainTitle";

const Home = () => {
  const {
    bigLink,
    inputRef,
    handleInputSelected,
    newURL,
    handleSubmit,
    error,
    clientName,
  } = useTheme();

  return (
    <>
      <MainNavBar />
      <section className="flex items-center justify-center h-screen bg-averagesize-white">
        <div className="p-6 text-center">
          <MainTitle version={"V1.0.0"} />
          <SloganAS text={`Welcome, ${clientName}`} />
          <form onSubmit={handleSubmit}>
            <div className="mt-12">
              <Label text={"Paste the Link to be shortened."} />
              <input
                type="text"
                value={bigLink}
                ref={inputRef}
                onChange={newURL}
                onClick={handleInputSelected}
                placeholder="Enter your link here"
                className={`${
                  error ? "border-averagesize-red" : "border-averagesize-black"
                } bg-averagesize-green border-1 py-1 px-2 mt-1 mb-3 w-10/12 text-sm rounded-lg text-center`}
              />
            </div>
            <BtnNavigate
              type="submit"
              icon={LuScissors}
              text={"Make it Short !"}
            />
            {error && <Errors icon={IoMdClose} text={error} />}
          </form>
        </div>
      </section>
      <Footer year={"2025"} />
    </>
  );
};

export default Home;
