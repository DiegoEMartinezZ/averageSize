const IconCRUD = ({ icon: Icon, CRUD }) => {
  return (
    <>
      <Icon onClick={CRUD} className="cursor-pointer mx-4" />
    </>
  );
};

export default IconCRUD;
