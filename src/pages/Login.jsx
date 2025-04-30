import Footer from "../components/Footer";
import InputEmail from "../UI/form/InputEmail";
import { useTheme } from "../components/context/ThemeContext";
import { useSession } from "../components/context/SessionContext";
import Errors from "../UI/alerts/Errors";
import { IoMdClose } from "react-icons/io";
import BtnLogin from "../UI/buttons/BtnLogin";
import MainTitle from "../UI/texts/MainTitle";
import { useState } from "react";

const Login = () => {
  const { login } = useSession();
  const { errorEmail } = useTheme();

  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { user, token } = res.data;
      login(user, token);
    } catch (error) {
      setError(error.response?.data || "Login failed. Please try again.");
      console.error("Login error:", error);
    }
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
