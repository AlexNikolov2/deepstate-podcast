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
        <a href="https://www.facebook.com/people/%D0%94%D1%8A%D0%BB%D0%B1%D0%BE%D0%BA%D0%B0%D1%82%D0%B0-%D0%B4%D1%8A%D1%80%D0%B6%D0%B0%D0%B2%D0%B0-%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE%D0%B4%D0%BA%D0%B0%D1%81%D1%82/100086160321575">
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
        </a>
        <a href="https://www.instagram.com/deepstate.podcast/">
          <FontAwesomeIcon icon={faInstagram} className="text-white" />
        </a>
        <a href="https://open.spotify.com/show/4j4UH7lzr8UJhk3MvoCpEZ">
          <FontAwesomeIcon icon={faSpotify} className="text-white" />
        </a>
      </div>
    </footer>
  );
};
