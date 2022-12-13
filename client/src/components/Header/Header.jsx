import image from '../../assets/img/Untitled.png';

export const HeaderComponent = () => {
  return (
    <header className="flex justify-around">
      <div id="left" className="flex">
        <img src={image} alt="" className="w-20" />
        <p className="text-3xl">Дълбоката държава</p>
      </div>
      <ul className="flex gap-3">
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
    </header>
  );
};
