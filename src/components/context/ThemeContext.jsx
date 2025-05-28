import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import {
  getAllUsers,
  getUserByEmail,
  createUser,
} from "../../service/UserService";
import {
  getAllLinksByUserId,
  createLink,
  deleteLink,
} from "../../service/LinkService";
import { getAllClicks, findClicksByLinkId } from "../../service/ClickService";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // useNavigate() to move around each of the views of the app
  const navigate = useNavigate();

  const handleView = (page) => {
    navigate(page);
  };

  const iconHandleView = (page) => {
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate(page);
  };

  // Title for the new link created
  const [titleLink, setTitleLink] = useState("My website");
  const handleTitleLink = (e) => {
    setTitleLink(e.target.value);
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
      navigate("/new-link");
    } else {
      setError("Please enter a valid link.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  // Handle to submit a valid email that was register in the DB
  // Name states
  const [userName, setUserName] = useState("User");
  const [errorName, setErrorName] = useState("");
  // email states
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  // password states
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle to name input
  const handleName = (e) => {
    setUserName(e.target.value);
  };

  // Handle to email input
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handle to password input

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // handle to confirm password

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Check the DB to find the email registered

  const findByEmail = async (email) => {
    try {
      const user = await getUserByEmail(email);
      return user;
    } catch (error) {
      console.error("Error finding user:", error);
      return null;
    }
  };

  const [currentEmailLogIn, setCurrentEmailLogIn] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setErrorEmail("Please enter a valid email.");
      setTimeout(() => setErrorEmail(""), 2000);
      return;
    }

    try {
      const user = await findByEmail(email);
      if (!user) {
        setErrorEmail("Email not found.");
        setTimeout(() => setErrorEmail(""), 2000);
        return;
      }

      setUserName(user.name);
      setCurrentEmailLogIn(email);
      setEmail("");
      setErrorEmail("");
      navigate("/home");
    } catch (error) {
      setErrorEmail("Error logging in");
      setTimeout(() => setErrorEmail(""), 2000);
    }
  };

  // Create new user if the email is not registered in the DB

  const handleSignUp = async (e) => {
    e.preventDefault();

    // email cannot be empty
    if (email === "") {
      setErrorEmail("Email cannot be empty.");
      setTimeout(() => setErrorEmail(""), 2000);
      return;
    }

    // First validate email
    if (!validator.isEmail(email)) {
      setErrorEmail("Please enter a valid email.");
      setTimeout(() => setErrorEmail(""), 2000);
      return;
    }

    // Then validate password match
    if (password !== confirmPassword) {
      setErrorPassword("Passwords don't match!");
      setTimeout(() => setErrorPassword(""), 2000);
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters long");
      setTimeout(() => setErrorPassword(""), 2000);
      return;
    }

    try {
      const user = await findByEmail(email);

      if (user && user.email === email) {
        setErrorEmail("Email already in use.");
        setTimeout(() => setErrorEmail(""), 2000);
        return;
      }

      // If all validations pass, create new user
      const newUser = {
        userName,
        email,
        password,
      };

      await createUser(newUser);
      setUserName("" || "User");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/home");
    } catch (error) {
      console.error("Error creating user:", error);
      setErrorEmail("Error creating account");
      setTimeout(() => setErrorEmail(""), 2000);
    }
  };

  // Copy the short link created

  const [copied, setCopied] = useState(false);

  // Creating a new Link with the Pollos Hermanos Standards

  const BASE_URL = "https://asize.netlify.app/";
  const [shortLink, setShortLink] = useState(() => {
    const characters =
      "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
    const lengthShortLink = 7;
    let result = "";

    for (let i = 0; i < lengthShortLink; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return `${BASE_URL}${result}`;
  });

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {}
  };

  // localStorage to save links created by user (Testing)

  const [userLinks, setUserLinks] = useState([]);
  const [userIdx, setUserIdx] = useState();

  // Add the short link created to the DB

  const addNewLink = (userEmail, linkData) => {
    const userIndex = localUserDB.findIndex((user) => user.email === userEmail);

    if (userIndex !== -1) {
      const newLink = {
        id: `link${Date.now()}`, // Generate unique ID
        title: linkData.title || `${titleLink}${count}`,
        originalLink: linkData.originalLink,
        shortLink: linkData.shortLink,
        createdAt: new Date().toISOString().split("T")[0],
        clicks: 0,
        uniqueVisitors: 0,
      };

      const updatedDB = [...localUserDB];
      updatedDB[userIndex].links.push(newLink);
      updatedDB[userIndex].totalLinks++;

      // Update localstorage
      localStorage.setItem("userDB", JSON.stringify(updatedDB));

      setLocalUserDB(updatedDB);
      setUserLinks([...updatedDB[userIndex].links]);
      console.log(userLinks);
      setUserIdx(userIndex);

      return newLink;
    }

    return null; // Return null to avoid rendering anything here
  };

  let count = 0;
  const [addMessage, setAddMessage] = useState(false);
  const addHandler = () => {
    count++;
    setAddMessage(true);
    const newLinkData = {
      title: "",
      originalLink: bigLink,
      shortLink: shortLink,
    };
    addNewLink(currentEmailLogIn, newLinkData);
    setTimeout(() => {
      setAddMessage(false);
    }, 2000);
  };

  // Edit the original link
  const [edit, setEdit] = useState(false);

  const editHandler = (e) => {
    setEdit(!edit);
    e.preventDefault();
    if (validator.isURL(bigLink)) {
      setError("");
    } else {
      setError("Please enter a valid link.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  // Date of short link creation (Last created)

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
  const newShortLink = (e) => {
    setShortLink(e.target.value);
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
        userLinks,
        // localUserDB,
        handleSignUp,
        navigate,
        userIdx,
        setUserIdx,
        currentEmailLogIn,
        addNewLink,
        handleName,
        userName,
        setUserName,
        titleLink,
        handleTitleLink,
        handleEmail,
        handlePassword,
        handleConfirmPassword,
        password,
        handleLogIn,
        email,
        errorEmail,
        newShortLink,
        isDisable,
        shortLink,
        deleteLink,
        deleteShortLink,
        notDeleteShortLink,
        toDelete,
        updateLink,
        editLink,
        iconHandleView,
        copied,
        copyHandler,
        editHandler,
        edit,
        addMessage,
        addHandler,
        bigLink,
        inputRef,
        handleView,
        handleInputSelected,
        newURL,
        handleSubmit,
        error,
        showPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        setShowPassword,
        errorPassword,
        confirmPassword,
        showQR,
        showQRCode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
