import image from '../../assets/img/Untitled.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';

export const HeaderComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header
      className={
        'md:mx-10 flex justify-between items-center gap-4' +
        (navbarOpen ? ' flex-col' : ' flex-row')
      }
      id="header">
      <div id="left" className="flex items-center gap-2 md_rev:w-full md_rev:justify-between">
        <img src={image} alt="" className="w-20" />
        <p className="text-4xl">Дълбоката държава</p>
        <button onClick={() => setNavbarOpen(!navbarOpen)} className="md:hidden relative right-5">
          <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} />
        </button>
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
      </div>
      <div className="flex gap-5 md_rev:hidden">
        <ul className="md:flex gap-3" id="navbar">
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
