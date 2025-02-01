import { faChevronLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import IconNavigate from "../UI/buttons/IconNavigate";
import SloganAS from "../UI/texts/SloganAS";
import TitleAS from "../UI/texts/TitleAS";
import Footer from "../components/Footer";
import BtnNavigate from "../UI/buttons/BtnNavigate";
import PageView from "../UI/texts/PageView";

const AllLinks = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <PageView text={"All Links"} />
          <TitleAS text={"Average Size"} />
          <SloganAS text={"Short link, long reach."} />
          <ul className="my-8 -mx-8">
            <li className="flex my-2">
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 1"}
              />
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 2"}
              />
            </li>

            <li className="flex my-2">
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 3"}
              />
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 4"}
              />
            </li>

            <li className="flex my-2">
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 5"}
              />
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 6"}
              />
            </li>

            <li className="flex my-2">
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 7"}
              />
              <BtnNavigate
                icon={faLink}
                page={"/details"}
                text={"Short Link 8"}
              />
            </li>
          </ul>
          <IconNavigate page={"/general"} icon={faChevronLeft} />
        </div>
        <Footer year={2025} />
      </section>
    </>
  );
};
export default AllLinks;
