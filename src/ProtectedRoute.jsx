import { Navigate } from "react-router-dom";
import { useTheme } from "./components/context/ThemeContext";

const ProtectedRoute = ({ children }) => {
  const { localUserDB, userIdx } = useTheme();

  const isValidUser =
    localUserDB && userIdx !== undefined && localUserDB[userIdx] !== undefined;

  if (!isValidUser) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;
