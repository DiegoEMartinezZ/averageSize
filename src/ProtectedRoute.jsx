import { Navigate } from "react-router-dom";
import { getUserById } from "./service/UserService";

const ProtectedRoute = ({ children }) => {
  const isValidUser = getUserById !== undefined;

  if (!isValidUser) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;
