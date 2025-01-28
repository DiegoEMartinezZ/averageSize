import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCopy = ({ icon, handler }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} onClick={handler} />
    </>
  );
};

export default IconCopy;
