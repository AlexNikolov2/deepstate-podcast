import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core';

export const FooterComponent = () => {
  return (
    <footer>
      <div id="left">
        <p>Дълбоката държава</p>
        <p>&copy;2023. All rights reserved.</p>
      </div>
      <div id="right">
        <FontAwesomeIcon icon={brands('facebook')} className="text-white" />
      </div>
    </footer>
  );
};
