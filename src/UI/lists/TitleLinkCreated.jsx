import { useRef } from "react";

const TitleLinkCreated = ({ text, handleChange }) => {
  const titleRef = useRef(null);
  const handleTitleSelect = () => {
    if (titleRef.current) {
      titleRef.current.select();
    }
  };

  return (
    <>
      <input
        type="text"
        ref={titleRef}
        value={text}
        onClick={handleTitleSelect}
        onChange={handleChange}
        className="flex justify-center text-center font-light text-sm m-auto w-auto px-2 my-6 bg-averagesize-green rounded-lg py-1"
      />
    </>
  );
};

export default TitleLinkCreated;
