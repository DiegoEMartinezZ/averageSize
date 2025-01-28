import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Errors = ({ icon, text }) => {
  return (
    <>
      <p className="absolute right-0 left-0 top-36 bg-red-400 my-1 text-sm font-sm p-1 w-52 m-auto rounded-sm">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {text}
      </p>
    </>
  );
};

export default Errors;
