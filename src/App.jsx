import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import routes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            {routes.map((oneRoute) => (
              <Route
                key={oneRoute.path}
                path={oneRoute.path}
                element={oneRoute.element}
              />
            ))}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
