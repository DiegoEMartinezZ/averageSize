import { CiLogout } from "react-icons/ci";
import { useTheme } from "../../components/context/ThemeContext";

const BtnLogout = () => {
  const { setUserName, navigate } = useTheme();

  const handleLogout = () => {
    setUserName("");
    navigate("/");
  };

  return (
    <>
      <button onClick={handleLogout}>
        <CiLogout />
      </button>
    </>
  );
};

export default BtnLogout;
