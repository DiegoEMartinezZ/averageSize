const ShortURL = ({ URL }) => {
  return (
    <>
      <h1 className=" m-auto right-0  left-0 bg-green-200 border-2 px-5 py-2 mt-1 text-sm w-fit rounded-full  text-center">
        {URL}
      </h1>
    </>
  );
};

export default ShortURL;
