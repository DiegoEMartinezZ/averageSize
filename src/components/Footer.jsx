import {
  faGithub,
  faLinkedin,
  faBehance,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../UI/socialMedia/SocialMedia";

const Footer = ({ year }) => {
  return (
    <>
      <footer>
        <section className="absolute bottom-0 right-0 left-0 py-7 px-3 w-72 m-auto">
          <div className="flex flex-nowrap justify-around mx-10 my-0.5">
            <SocialMedia
              url={"https://www.linkedin.com/in/diegomz/"}
              icon={faLinkedin}
            />
            <SocialMedia
              url={"https://github.com/DiegoEMartinezZ"}
              icon={faGithub}
            />
            <SocialMedia
              url={"https://www.behance.net/lowoncyan_"}
              icon={faBehance}
            />
            <SocialMedia
              url={"https://www.instagram.com/lowoncyan_"}
              icon={faInstagram}
            />{" "}
          </div>
          <h4 className="text-xs text-center font-light mt-2">
            Diego Martínez - {year}
          </h4>
        </section>
      </footer>
    </>
  );
};

export default Footer;
