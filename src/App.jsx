import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import AllLinks from "./pages/AllLinks";
import Details from "./pages/Details";
import ShortLink from "./pages/ShortLink";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/general" element={<Stats />} />
          <Route path="/links" element={<AllLinks />} />
          <Route path="/details" element={<Details />} />
          <Route path="/short" element={<ShortLink />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
