import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import routes from "./Routes";
import { SessionProvider } from "./components/context/SessionContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <SessionProvider>
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
        </SessionProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
