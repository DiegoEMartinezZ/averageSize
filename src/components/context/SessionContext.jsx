import { createContext, useState, useContext, useEffect } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // check for existing session on load
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setSession({ token, user: JSON.parse(user) });
    }
  }, []);

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setSession({ token, user });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
