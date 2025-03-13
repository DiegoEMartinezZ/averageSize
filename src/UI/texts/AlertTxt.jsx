const AlertTxt = ({ text }) => {
  return (
    <>
      <h2 className="py-1 my-2 font-medium text-sm text-white rounded-lg bg-red-600">
        {text}
      </h2>
    </>
  );
};

export default AlertTxt;
