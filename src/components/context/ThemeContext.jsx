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
  const [shortURL, setShortURL] = useState("www.short.com");

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(shortURL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("failed to copy text:", error);
    }
  };

  // Btn to show the QR Code of the selected short link
  const [showQRCode, setShowQRCode] = useState(false);

  const showQR = () => {
    setShowQRCode(!showQRCode);
  };

  // Flag to see if the input of the short link can be edited or not
  const [isDisable, setIsDisable] = useState(true);
  const editLink = () => {
    setIsDisable(!isDisable);
  };

  // Update the short link name, the disable the input
  const newShortURL = (e) => {
    setShortURL(e.target.value);
  };

  // Disable the input when short link is edited
  const updateLink = () => {
    setIsDisable(!isDisable);
  };

  // Delete and not delete the short link
  const [toDelete, setToDelete] = useState(false);
  const deleteLink = () => {
    setToDelete(!toDelete);
  };

  const deleteShortLink = () => {
    setToDelete(!toDelete);
    navigate("/links");
  };

  const notDeleteShortLink = () => {
    setToDelete(!toDelete);
  };

  return (
    <ThemeContext.Provider
      value={{
        newShortURL,
        isDisable,
        shortURL,
        deleteLink,
        deleteShortLink,
        notDeleteShortLink,
        toDelete,
        updateLink,
        editLink,
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
        showQR,
        showQRCode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
