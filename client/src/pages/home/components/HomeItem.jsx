/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomeItem = ({ item }) => {
  return (
    <div className="item">
      <FontAwesomeIcon icon={item.icon} className="text-6xl text-sky-400" />
      <p className="item-title">{item.title}</p>
      <p className="item-text">{item.text}</p>
    </div>
  );
};
