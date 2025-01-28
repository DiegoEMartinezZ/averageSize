import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCRUD = ({ icon, CRUD }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} onClick={CRUD} className="mt-3 text-sm" />
    </>
  );
};

export default IconCRUD;
