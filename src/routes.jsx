import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NewLink from "./pages/NewLink";
import AllLinks from "./pages/AllLinks";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/new-link", element: <NewLink /> },
  { path: "/general", element: <Stats /> },
  { path: "/details", element: <Details /> },
  { path: "/links", element: <AllLinks /> },
];

export default routes;
