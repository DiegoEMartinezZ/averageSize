import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paragraph from "../texts/Paragraph";
import AlertTxt from "../texts/AlertTxt";
import {
  faCheck,
  faTriangleExclamation,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../components/context/ThemeContext";

const ScreenAlert = () => {
  const { deleteShortLink, notDeleteShortLink } = useTheme();
  return (
    <>
      <section className="bg-red-400/80 z-10 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="absolute bg-yellow-400 border-2 border-white rounded-xl p-4 mx-12">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-3xl my-1"
          />
          <Paragraph text={"Are you sure you want to delete this link? :("} />
          <AlertTxt text={"This action cannot be undone"} />
          <div className="mt-5 mx-5 flex justify-around items-center text-lg">
            <FontAwesomeIcon
              icon={faCheck}
              onClick={deleteShortLink}
              className="mx-3 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faX}
              onClick={notDeleteShortLink}
              className="mx-3 cursor-pointer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ScreenAlert;
