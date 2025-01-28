const ShortURL = ({ URL }) => {
  return (
    <>
      <h1 className="bg-green-200 font-base text-xs p-2 mt-1 rounded-lg border-1 px-1 text-center">
        {URL}
      </h1>
    </>
  );
};

export default ShortURL;
