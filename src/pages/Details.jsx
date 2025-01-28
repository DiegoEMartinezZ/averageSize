import {
  faChevronLeft,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import BtnShow from "../UI/buttons/BtnShow";
import IconNavigate from "../UI/buttons/IconNavigate";
import SloganAS from "../UI/texts/SloganAS";
import TitleAS from "../UI/texts/TitleAS";
import Footer from "../components/Footer";
import IconCRUD from "../UI/buttons/IconCRUD";
import Count from "../UI/lists/Count";
import Date from "../UI/lists/Date";
import ShortURL from "../UI/URL/ShortURL";

const Details = () => {
  const showOriginalLink = () => {
    console.log("Estas mostrando el link original");
  };

  const editLink = () => {
    console.log("Vas a editar el enlace corto");
  };

  const deleteLink = () => {
    console.log("Vas a borrar el enlace corto");
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <BtnShow text={"Show Original Link"} handler={showOriginalLink} />
          <ul className="my-8 -mx-8">
            <Count text={"Times Clicked"} count={0} />
            <Count text={"Unique Visitors"} count={0} />
            <Date text={"Creation Date"} date={"DD-MM-YYYY"} />
            <Date text={"Last Update"} date={"DD-MM-YYYY"} />
            <div className="flex-col justify-between flex-nowrap my-5">
              <ShortURL URL={"www.shortURL.com"} />
              <div className="flex justify-around">
                <IconCRUD icon={faPen} CRUD={editLink} />
                <IconCRUD icon={faTrash} CRUD={deleteLink} />
              </div>
            </div>
          </ul>
          <IconNavigate page={"/links"} icon={faChevronLeft} />
        </div>
        <Footer year={2025} />
      </section>
    </>
  );
};

export default Details;
