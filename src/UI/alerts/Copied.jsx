const Copied = ({ icon: Icon, text }) => {
  return (
    <>
      <p className="absolute flex justify-center items-center right-0 left-0 top-36 text-center bg-averagesize-green my-1 text-sm font-sm p-1 w-52 m-auto rounded-sm">
        <Icon className="mr-2" />
        {text}
      </p>
    </>
  );
};

export default Copied;
