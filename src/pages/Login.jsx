import Footer from "../components/Footer";
import InputEmail from "../UI/form/InputEmail";
import Subtitle from "../UI/texts/Subtitle";
import TitleAS from "../UI/texts/TitleAS";
import { useTheme } from "../components/context/ThemeContext";
import Errors from "../UI/alerts/Errors";
import { IoMdClose } from "react-icons/io";
import BtnLogin from "../UI/buttons/BtnLogin";
import MainTitle from "../UI/texts/MainTitle";

const Login = () => {
  const { errorEmail } = useTheme();

  const handleForm = (e) => {
    e.defaultPrevent();
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen bg-averagesize-white">
        <div className="p-6 text-center">
          <MainTitle version={"V1.0.0"} />

          <form onSubmit={handleForm}>
            <InputEmail text={"Enter your register email :)"} />
            <BtnLogin text={"Login"} />
            {errorEmail && <Errors icon={IoMdClose} text={errorEmail} />}
          </form>
        </div>
      </section>
      <Footer year={"2025"} />
    </>
  );
};

export default Login;
