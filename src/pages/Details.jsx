import BtnShow from "../UI/buttons/BtnShow";
import IconNavigate from "../UI/buttons/IconNavigate";
import TitleAS from "../UI/texts/TitleAS";
import IconCRUD from "../UI/buttons/IconCRUD";
import Count from "../UI/lists/Count";
import Date from "../UI/lists/Date";
import IconCopy from "../UI/buttons/IconCopy";
import Copied from "../UI/alerts/Copied";
import { useTheme } from "../components/context/ThemeContext";
import PageView from "../UI/texts/PageView";
import EditOriginalLink from "../UI/lists/EditOriginalLink";
import ScreenAlert from "../UI/alerts/ScreenAlert";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import Subtitle from "../UI/texts/Subtitle";
import { useRef } from "react";
import TitleLinkCreated from "../UI/lists/TitleLinkCreated";

const Details = () => {
  const shortLinkRef = useRef(null);
  const {
    copyHandler,
    copied,
    newShortURL,
    shortURL,
    deleteLink,
    updateLink,
    isDisable,
    toDelete,
    editLink,
    edit,
    titleLink,
    handleTitleLink,
  } = useTheme();

  const handleShortLinkSelect = () => {
    if (shortLinkRef.current) {
      shortLinkRef.current.select();
    }
  };

  return (
    <>
      <section className="flex relative items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <PageView icon={IoIosInformationCircleOutline} text={"Details"} />
          <Subtitle text={"Alfa Version"} />
          <TitleAS text={"Average Size"} />
          <TitleLinkCreated text={titleLink} handleChange={handleTitleLink} />
          <ul className="my-8 -mx-8">
            <EditOriginalLink text={"Original Link"} icon={CiEdit} />
            <Count text={"Times Clicked"} count={0} />
            <Count text={"Unique Visitors"} count={0} />
            <Date text={"Creation Date"} date={"DD-MM-YYYY"} />
            <Date text={"Last Update"} date={"DD-MM-YYYY"} />

            {toDelete && <ScreenAlert />}

            <div className="flex-col items-center justify-around flex-nowrap my-10">
              <h2 className=" text-sm font-medium"> Your Link </h2>
              <input
                ref={shortLinkRef}
                value="aslink.com/123"
                type="text"
                disabled={isDisable}
                onChange={newShortURL}
                onClick={handleShortLinkSelect}
                className={`${
                  isDisable ? "bg-averagesize-green" : "bg-gray-200"
                } p-1 w-fit m-auto text-sm font-light rounded-lg  text-center`}
              />
              {copied && (
                <div className="absolute -top-28 m-auto right-0 left-0">
                  <Copied
                    icon={CiCircleCheck}
                    text={`${shortURL} copied to clipboard!`}
                  />
                </div>
              )}

              {!edit && (
                <div className="flex justify-around items-center my-3 text-sm">
                  <div className={`${isDisable ? "inline-block" : "hidden"}`}>
                    <IconCopy icon={IoCopyOutline} handler={copyHandler} />
                  </div>
                  {isDisable ? (
                    <IconCRUD icon={CiEdit} CRUD={editLink} />
                  ) : (
                    <IconCRUD icon={CiCircleCheck} CRUD={updateLink} />
                  )}
                  {isDisable ? (
                    <IconCRUD icon={CiTrash} CRUD={deleteLink} />
                  ) : (
                    <IconCRUD icon={IoMdClose} CRUD={editLink} />
                  )}
                </div>
              )}
            </div>
          </ul>
          <IconNavigate page={"/links"} icon={IoIosArrowBack} />
        </div>
      </section>
    </>
  );
};

export default Details;
