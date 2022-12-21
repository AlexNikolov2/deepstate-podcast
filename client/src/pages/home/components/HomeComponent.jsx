import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';

export const HomeItem = () => {
  return (
    <div className="item">
      <FontAwesomeIcon icon={faPodcast} className="text-6xl text-sky-400" />
      <p className="item-title">Епизоди</p>
      <p className="item-text">
        В този сайт можете да намерите всички епизоди от подкаста &quot;Дълбоката държава&quot;.
      </p>
    </div>
  );
};
