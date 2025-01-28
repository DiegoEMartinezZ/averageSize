const BtnShow = ({ handler, text }) => {
  return (
    <>
      <button
        onClick={handler}
        className="cursor-pointer text-sm font-medium m-2 py-1 px-2 bg-green-300  rounded-lg"
      >
        {text}
      </button>
    </>
  );
};

export default BtnShow;
