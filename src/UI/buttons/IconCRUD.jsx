import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCRUD = ({ icon, CRUD }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} onClick={CRUD} className="cursor-pointer" />
    </>
  );
};

export default IconCRUD;
