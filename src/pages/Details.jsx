import {
  faCheck,
  faChevronLeft,
  faCircleInfo,
  faCopy,
  faPen,
  faTrash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import BtnShow from "../UI/buttons/BtnShow";
import IconNavigate from "../UI/buttons/IconNavigate";
import SloganAS from "../UI/texts/SloganAS";
import TitleAS from "../UI/texts/TitleAS";
import IconCRUD from "../UI/buttons/IconCRUD";
import Count from "../UI/lists/Count";
import Date from "../UI/lists/Date";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import IconCopy from "../UI/buttons/IconCopy";
import Copied from "../UI/alerts/Copied";
import { useTheme } from "../components/context/ThemeContext";
import PageView from "../UI/texts/PageView";
import EditOriginalLink from "../UI/lists/EditOriginalLink";
import ScreenAlert from "../UI/alerts/ScreenAlert";

const Details = () => {
  const {
    copyHandler,
    copied,
    inputRef,
    handleInputSelected,
    newShortURL,
    shortURL,
    deleteLink,
    updateLink,
    isDisable,
    toDelete,
    editLink,
    showQR,
    edit,
  } = useTheme();

  return (
    <>
      <section className="flex relative items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <PageView icon={faCircleInfo} text={"Details"} />
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />

          <BtnShow text={"QR Code"} handler={showQR} />
          <ul className="my-8 -mx-8">
            <Count text={"Times Clicked"} count={0} />
            <Count text={"Unique Visitors"} count={0} />
            <Date text={"Creation Date"} date={"DD-MM-YYYY"} />
            <Date text={"Last Update"} date={"DD-MM-YYYY"} />
            <EditOriginalLink text={"Original Link"} icon={faPen} />

            {toDelete && <ScreenAlert />}

            <div className="flex-col items-center justify-around flex-nowrap my-10">
              <h2 className="my-1 text-sm font-medium"> Short link options </h2>
              <input
                ref={inputRef}
                value={shortURL}
                type="text"
                disabled={isDisable}
                onChange={newShortURL}
                onClick={handleInputSelected}
                className={`${
                  isDisable ? "bg-green-200" : "bg-gray-200"
                } p-1 w-fit m-auto text-sm font-light rounded-lg  text-center`}
              />
              {copied && (
                <div className="absolute -top-28 m-auto right-0 left-0">
                  <Copied
                    icon={faCheck}
                    text={`${shortURL} copied to clipboard!`}
                  />
                </div>
              )}

              {!edit && (
                <div className="flex justify-around items-center my-2 text-sm">
                  <div className={`${isDisable ? "inline-block" : "hidden"}`}>
                    <IconCopy icon={faCopy} handler={copyHandler} />
                  </div>
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
                </div>
              )}
            </div>
          </ul>
          <IconNavigate page={"/links"} icon={faChevronLeft} />
        </div>
      </section>
    </>
  );
};

export default Details;
