import image from '../../assets/img/Untitled.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header
      className={
        'md:mx-10 flex justify-between items-center gap-4' +
        (navbarOpen ? ' flex-col' : ' flex-row')
      }
      id="header">
      <div id="left" className="flex items-center gap-2">
        <img src={image} alt="" className="w-20" />
        <p className="text-4xl">Дълбоката държава</p>
      </div>
      <div className="flex gap-5 md:hidden">
        <ul className={navbarOpen ? 'md:flex gap-3' : 'hidden'} id="navbar">
          <li>
            <Link to="/" className="text-xl">
              Начало
            </Link>
          </li>
          <li>
            <Link to="/episodes" className="text-xl">
              Епизоди
            </Link>
          </li>
          <li>
            <Link to="/guests" className="text-xl">
              Гости
            </Link>
          </li>
        </ul>
        <button onClick={() => setNavbarOpen(!navbarOpen)} className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" data-testid="icon" />
        </button>
      </div>
      <div className="md:flex md:gap-5">
        <ul className="hidden md:flex gap-3" id="navbar">
          <li>
            <Link to="/" className="text-xl">
              Начало
            </Link>
          </li>
          <li>
            <Link to="/episodes" className="text-xl">
              Епизоди
            </Link>
          </li>
          <li>
            <Link to="/guests" className="text-xl">
              Гости
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
