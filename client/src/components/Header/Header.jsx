/* eslint-disable jsx-a11y/anchor-has-content */
import image from "../../assets/img/Untitled.png";
import "./Header.css";
import { myFunction } from "./navButton";

export const HeaderComponent = () => {
  return (
    <header className="flex flex-row justify-around" id="header">
      <section className="flex flex-row content-center gap-2">
        <img src={image} alt="" className="" />
        <h2>Дълбоката държава</h2>
      </section>
      <section className="flex flex-row content-center">
        <ul
          className="flex flex-row justify-around gap-3 list-none"
          id="navbar"
        >
          <li>
            <a href="/">Начална страница</a>
          </li>
          <li>
            <a href="/">Епизоди</a>
          </li>
          <li>
            <a href="/">Гости</a>
          </li>
        </ul>
      </section>
      <button className="icon" onClick={myFunction} id="button">
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
};
