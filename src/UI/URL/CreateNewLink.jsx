import { useTheme } from "../../components/context/ThemeContext";

const CreateNewLink = () => {
  const { shortLink } = useTheme();

  return (
    <>
      <h1 className=" m-auto right-0 left-0 bg-averagesize-yellow border-2 px-5 py-2 mt-1 text-sm w-auto rounded-full text-center">
        {shortLink}
      </h1>
    </>
  );
};

export default CreateNewLink;
