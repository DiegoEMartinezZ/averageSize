import Landing from "./pages/Landing";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NewLink from "./pages/NewLink";
import AllLinks from "./pages/AllLinks";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginTest from "./pages/LoginTest";
import Register from "./pages/Register";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/login", element: <LoginTest /> },
  { path: "/register", element: <Register /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/new-link",
    element: (
      <ProtectedRoute>
        {" "}
        <NewLink />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/general",
    element: (
      <ProtectedRoute>
        {" "}
        <Stats />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/details",
    element: (
      <ProtectedRoute>
        {" "}
        <Details />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/links",
    element: (
      <ProtectedRoute>
        {" "}
        <AllLinks />
      </ProtectedRoute>
    ),
  },
  // Catch all unmatched routes
  { path: "*", element: <Navigate to={"/loginTest"} replace /> },
];

export default routes;
