import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // useNavigate() to move around each of the views of the app
  const navigate = useNavigate();

  const handleView = (page) => {
    navigate(page);
  };

  const iconHandleView = (page) => {
    navigate(page);
  };

  // useRef() to select all the content inside an input when clicked
  const inputRef = useRef(null);
  const handleInputSelected = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  // Handle to add a new url
  const [bigLink, setBigLink] = useState("");
  const newURL = (e) => {
    setBigLink(e.target.value);
  };

  // Handle to submit the form with the info to check valid URL
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isURL(bigLink)) {
      setError("");
      navigate("/short");
    } else {
      setError("Please enter a valid link.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  // Copy the short link created
  const [copied, setCopied] = useState(false);
  const [shortURL, setShortURL] = useState("hola");

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(shortURL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("failed to copy text:", error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        iconHandleView,
        copied,
        copyHandler,
        bigLink,
        inputRef,
        handleView,
        handleInputSelected,
        newURL,
        handleSubmit,
        error,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
