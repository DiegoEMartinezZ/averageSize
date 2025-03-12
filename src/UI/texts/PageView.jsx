import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageView = ({ icon, text }) => {
  return (
    <>
      <section>
        <h1 className="text-center mb-8 text-sm border-y-4 rounded-sm border-green-200 font-medium py-2">
          <FontAwesomeIcon icon={icon} className="mx-1" />
          {text}
        </h1>
      </section>
    </>
  );
};

export default PageView;
