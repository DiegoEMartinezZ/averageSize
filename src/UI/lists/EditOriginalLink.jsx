import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../components/context/ThemeContext";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import Errors from "../alerts/Errors";

const EditOriginalLink = ({ text, icon }) => {
  const {
    bigLink,
    inputRef,
    error,
    editHandler,
    edit,
    newURL,
    handleInputSelected,
  } = useTheme();

  return (
    <>
      <div className={`justify-${edit ? "center" : "between"} flex`}>
        {!edit && <li className="font-light text-sm">{text}</li>}
        <li className="font-bold text-xs">
          {edit ? (
            <section>
              <form onSubmit={editHandler} className="">
                <div className="flex justify-between">
                  <h1 className="text-sm my-1 font-light text-left">
                    Edit original Link
                  </h1>
                  <button className="my-2 cursor-pointer">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
                <input
                  type="text"
                  value={bigLink}
                  ref={inputRef}
                  onChange={newURL}
                  onClick={handleInputSelected}
                  className={`${
                    error ? "border-red-400" : "border-black"
                  } text-xs flex border-1 p-1 rounded-lg w-auto px-10 text-center`}
                />

                {error && <Errors icon={faX} text={error} />}
              </form>
            </section>
          ) : (
            <FontAwesomeIcon
              icon={icon}
              onClick={editHandler}
              className={`${edit ? "hidden" : "block"} cursor-pointer`}
            />
          )}
        </li>
      </div>
    </>
  );
};

export default EditOriginalLink;
