const IconCopy = ({ icon: Icon, handler }) => {
  return (
    <>
      <Icon onClick={handler} className="cursor-pointer mx-4" />
    </>
  );
};

export default IconCopy;
