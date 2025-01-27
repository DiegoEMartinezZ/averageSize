import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = ({ icon, url }) => {
  return (
    <>
      <a href={url} target="_blank" rel="nofollow noopener noreferrer">
        <FontAwesomeIcon icon={icon} className="text-sm" />
      </a>
    </>
  );
};

export default SocialMedia;
