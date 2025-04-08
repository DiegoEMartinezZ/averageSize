import { CiLogin } from "react-icons/ci";
import { useTheme } from "../../components/context/ThemeContext";

const BtnLogin = ({ text }) => {
  const { handleLogIn, email } = useTheme();
  return (
    <>
      <button
        type="submit"
        onClick={handleLogIn}
        className={`${
          email.length <= 0 ? "opacity-0" : "opacity-100"
        } cursor-pointer text-sm bg-averagesize-yellow  py-1 px-2 m-auto rounded-lg flex justify-center items-center`}
      >
        <CiLogin className="mr-1" />
        <h1> {text} </h1>
      </button>
    </>
  );
};

export default BtnLogin;
