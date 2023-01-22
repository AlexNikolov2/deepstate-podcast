import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

export const FooterComponent = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between p-5 bottom-0 md_rev:text-center gap-5">
      <div id="left" className="flex flex-col gap-5">
        <p className="text-5xl font-bold">Дълбоката държава</p>
        <p className="text-[24px]">&copy;2023. All rights reserved.</p>
      </div>
      <div id="right" className="flex flex-col md:flex-row text-6xl gap-5">
        <FontAwesomeIcon icon={faFacebook} className="text-white" />
        <FontAwesomeIcon icon={faInstagram} className="text-white" />
        <FontAwesomeIcon icon={faSpotify} className="text-white" />
      </div>
    </footer>
  );
};
