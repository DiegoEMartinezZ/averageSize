import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { useTheme } from "../components/context/ThemeContext";
import Footer from "../components/Footer";
import Errors from "../UI/alerts/Errors";
import InputEmail from "../UI/form/InputEmail";
import MainTitle from "../UI/texts/MainTitle";
import BtnSignUp from "../UI/buttons/BtnSignUp";
import InputPassword from "../UI/form/InputPassword";
import InputConfirmPassword from "../UI/form/InputConfirmPassword";
import IconNavigate from "../UI/buttons/IconNavigate";
import InputName from "../UI/form/InputName";

const Register = () => {
  const { errorEmail, errorPassword } = useTheme();
  return (
    <>
      <div className="p-4 absolute top-4 left-0">
        <IconNavigate icon={IoIosArrowBack} page={"/login"} />
      </div>
      <section className="flex items-center justify-center h-screen bg-averagesize-white">
        <div className="p-6 text-center">
          <MainTitle version={"Registration Form"} />
          <form className="flex flex-col items-center justify-center mt-5 w-full max-w-sm mx-auto">
            <InputName text={"Enter your first name"} />
            <InputEmail text={"Enter your email :)"} />
            <InputPassword text={"Enter your password"} />
            <InputConfirmPassword text={"Re-enter your password"} />
            <BtnSignUp text={"Sign Up"} />
            {errorEmail && <Errors icon={IoMdClose} text={errorEmail} />}
            {errorPassword && <Errors icon={IoMdClose} text={errorPassword} />}
          </form>
        </div>
      </section>

      <Footer year={"2025"} />
    </>
  );
};

export default Register;
