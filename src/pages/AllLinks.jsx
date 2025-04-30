import IconNavigate from "../UI/buttons/IconNavigate";
import Footer from "../components/Footer";
import BtnNavigate from "../UI/buttons/BtnNavigate";
import PageView from "../UI/texts/PageView";
import { IoIosLink } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import MainTitle from "../UI/texts/MainTitle";

/* MAP THE ARRAY OF ALL THE LINKS CREATED BY USER

   {totalLinksUser.map((oneLink, idx) => (
              <li className="flex -my-3" key={idx}>
                <BtnNavigate
                  icon={IoIosLink}
                  page={"/details"}
                  text={oneLink.title}
                />
              </li>
            ))}
*/

const AllLinks = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 text-center">
          <PageView icon={IoIosLink} text={"My links"} />
          <MainTitle version={"v.1.0.0"} />
          <ul className="my-8 -mx-8">
            <BtnNavigate icon={IoIosLink} page={"/details"} text={"LINK"} />
          </ul>
          <IconNavigate page={"/general"} icon={IoIosArrowBack} />
        </div>
        <Footer year={2025} />
      </section>
    </>
  );
};
export default AllLinks;
