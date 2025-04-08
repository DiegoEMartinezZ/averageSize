const Errors = ({ icon: Icon, text }) => {
  return (
    <>
      <p className="absolute flex justify-center items-center right-0 left-0 top-36 bg-red-400 my-1 text-sm font-sm p-1 w-52 m-auto rounded-sm">
        <Icon className="mr-2 block text-lg" />
        {text}
      </p>
    </>
  );
};

export default Errors;
