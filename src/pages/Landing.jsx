import { IoIosLink } from "react-icons/io";
import SloganAS from "../UI/texts/SloganAS";
import BtnNavigate from "../UI/buttons/BtnNavigate";
import Footer from "../components/Footer";
import MainTitle from "../UI/texts/MainTitle";

const Landing = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-averagesize-white">
        <div className="p-6 text-center">
          <MainTitle version={"V1.0.0"} />
          <SloganAS text={"Short link, long reach."} />
          <BtnNavigate page={"/login"} icon={IoIosLink} text={"Start"} />
        </div>
      </section>
      <Footer year={"2025"} />
    </>
  );
};

export default Landing;
