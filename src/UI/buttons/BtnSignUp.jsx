import { useTheme } from "../../components/context/ThemeContext";
import { AiOutlineUserAdd } from "react-icons/ai";

const BtnSignUp = ({ text }) => {
  const { handleSignUp, email } = useTheme();
  return (
    <>
      <button
        type="submit"
        onClick={handleSignUp}
        className={`${
          email.length <= 0 ? "opacity-50" : "opacity-100"
        } cursor-pointer text-sm bg-averagesize-yellow my-2 py-1 px-2 m-auto rounded-lg flex justify-center items-center`}
      >
        <AiOutlineUserAdd className="mr-1" />
        <h1> {text} </h1>
      </button>
    </>
  );
};

export default BtnSignUp;
