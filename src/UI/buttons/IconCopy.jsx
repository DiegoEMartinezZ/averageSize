import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCopy = ({ icon, handler }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        onClick={handler}
        className="cursor-pointer"
      />
    </>
  );
};

export default IconCopy;
