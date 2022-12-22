/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faComments, faPodcast, faUserTie } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faPodcast, faUserTie, faComments);

export const HomeItem = ({ item }) => {
  return (
    <div className="item">
      <FontAwesomeIcon icon={item.icon} className="text-6xl text-sky-400" />
      <p className="item-title">{item.title}</p>
      <p className="item-text">
        В този сайт можете да намерите всички епизоди от подкаста &quot;Дълбоката държава&quot;.
      </p>
    </div>
  );
};
