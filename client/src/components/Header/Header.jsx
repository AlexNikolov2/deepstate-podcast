import image from '../../assets/img/Untitled.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { hamburger } from './utils/navButton';

export const HeaderComponent = () => {
  return (
    <header className="flex justify-around" id="header">
      <div id="left" className="flex">
        <img src={image} alt="" className="w-20" />
        <p className="text-3xl">Дълбоката държава</p>
      </div>
      <ul className="hidden md:flex gap-3" id="navbar">
        <li>
          <a href="/">Начало</a>
        </li>
        <li>
          <a href="/">Епизоди</a>
        </li>
        <li>
          <a href="/">Гости</a>
        </li>
      </ul>
      <button onClick={hamburger} className="md:hidden">
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </button>
    </header>
  );
};
