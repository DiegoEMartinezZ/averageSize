import Subtitle from "./Subtitle";
import TitleAS from "./TitleAS";

const MainTitle = ({ version }) => {
  return (
    <>
      <Subtitle text={version} />
      <TitleAS text={"Average Size"} />
    </>
  );
};

export default MainTitle;
