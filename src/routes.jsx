import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NewLink from "./pages/NewLink";
import AllLinks from "./pages/AllLinks";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
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
  { path: "*", element: <Navigate to={"/login"} replace /> },
];

export default routes;
