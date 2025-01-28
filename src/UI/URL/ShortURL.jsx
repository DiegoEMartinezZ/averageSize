const ShortURL = ({ URL }) => {
  return (
    <>
      <h1 className="bg-green-200 border-1 py-1 px-2 mt-1 text-sm rounded-lg text-center">
        {URL}
      </h1>
    </>
  );
};

export default ShortURL;
