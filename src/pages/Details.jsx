import {
  faCheck,
  faChevronLeft,
  faCopy,
  faPen,
  faTrash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import BtnShow from "../UI/buttons/BtnShow";
import IconNavigate from "../UI/buttons/IconNavigate";
import SloganAS from "../UI/texts/SloganAS";
import TitleAS from "../UI/texts/TitleAS";
import Footer from "../components/Footer";
import IconCRUD from "../UI/buttons/IconCRUD";
import Count from "../UI/lists/Count";
import Date from "../UI/lists/Date";
import { useRef, useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import IconCopy from "../UI/buttons/IconCopy";
import Copied from "../UI/alerts/Copied";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import URL from "../UI/URL/URL";

const Details = () => {
  const navigate = useNavigate();

  const [showLink, setShowLink] = useState(false);
  const showOriginalLink = () => {
    setShowLink(!showLink);
  };

  const [isDisable, setIsDisable] = useState(true);
  const editLink = () => {
    setIsDisable(!isDisable);
  };

  const [linkUpdated, setLinkUpdated] = useState("www.ShortLink.com");
  const updateLink = () => {
    setIsDisable(!isDisable);
  };

  const [copied, setCopied] = useState(false);
  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(linkUpdated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("failed to copy text:", error);
    }
  };

  const inputRef = useRef(null);
  const handleInputSelected = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const newShortURL = (e) => {
    setLinkUpdated(e.target.value);
  };

  const [toDelete, setToDelete] = useState(false);
  const deleteLink = () => {
    setToDelete(!toDelete);
  };

  const deleteShortLink = () => {
    setLinkUpdated("");
    navigate("/links");
  };

  const notDeleteShortLink = () => {
    setToDelete(!toDelete);
  };

  return (
    <>
      <section className="flex relative items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <BtnShow
            text={`${showLink ? "Hide original link" : "Show original link"}`}
            handler={showOriginalLink}
          />
          {showLink && (
            <URL
              URL={
                "www.a-really-long-but-really-really-long-link.com www.a-really-long-but-really-really-long-link.com"
              }
            />
          )}
          <ul className="my-8 w-auto">
            <Count text={"Times Clicked"} count={0} />
            <Count text={"Unique Visitors"} count={0} />
            <Date text={"Creation Date"} date={"DD-MM-YYYY"} />
            <Date text={"Last Update"} date={"DD-MM-YYYY"} />
            {toDelete && (
              <section className="absolute top-0 bottom-0 right-0 left-0 bg-amber-100 z-10">
                <div className="absolute top-64 rounded-lg left-0 right-0 bg-red-400 p-4 mx-12">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-2xl"
                  />
                  <p className="font-base text-lg">
                    Are you sure you want to delete this short link?
                  </p>
                  <h2 className="py-3 font-medium text-lg">
                    This action cannot be undone
                  </h2>
                  <div className="my-3 flex justify-around">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={deleteShortLink}
                      className="mx-3"
                    />
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={notDeleteShortLink}
                      className="mx-3"
                    />
                  </div>
                </div>
              </section>
            )}

            <div className="flex-col items-center justify-around flex-nowrap">
              <input
                ref={inputRef}
                value={linkUpdated}
                type="text"
                disabled={isDisable}
                onChange={newShortURL}
                onClick={handleInputSelected}
                className={`${
                  isDisable ? "bg-gray-400" : "bg-green-400"
                } border-black border-1 p-2 w-auto text-base font-medium tracking-wider rounded-lg text-center`}
              />
              {copied && (
                <div className="absolute -top-28 m-auto right-0 left-0">
                  <Copied
                    icon={faCheck}
                    text={`${linkUpdated} copied to clipboard!`}
                  />
                </div>
              )}

              <div className="flex justify-around items-center my-4">
                {isDisable ? (
                  <IconCRUD icon={faPen} CRUD={editLink} />
                ) : (
                  <IconCRUD icon={faCheck} CRUD={updateLink} />
                )}
                {isDisable ? (
                  <IconCRUD icon={faTrash} CRUD={deleteLink} />
                ) : (
                  <IconCRUD icon={faX} CRUD={editLink} />
                )}
                <div className={`${isDisable ? "inline-block" : "hidden"}`}>
                  <IconCopy icon={faCopy} handler={copyHandler} />
                </div>
              </div>
            </div>
          </ul>
          <IconNavigate page={"/links"} icon={faChevronLeft} />
        </div>
        <Footer year={2025} />
      </section>
    </>
  );
};

export default Details;
