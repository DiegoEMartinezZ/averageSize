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
import { useRef, useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Errors from "../UI/alerts/Errors";
import Input from "../UI/form/Input";

const Home = () => {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const newURL = (e) => {
    setUrl(e.target.value);
  };

  const inputRef = useRef(null);
  const handleInputSelected = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isURL(url)) {
      setError("");
      navigate("/short");
      // Continue with program execution here
    } else {
      setError("Please enter a valid URL.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <>
      <MainNavBar icon={faChartSimple} />
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <form onSubmit={handleSubmit}>
            <div className="mt-12">
              <label className="text-sm font-light">
                Paste your long URL here:
              </label>

              <input
                type="text"
                value={url}
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
