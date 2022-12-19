import { faComments, faPodcast, faUserTie } from '@fortawesome/free-solid-svg-icons';
// import image from '../../assets/img/home-header.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-5 mt-5 mb-5">
      <section className="mb-5 segoe-ui">
        <section className="flex flex-col gap-12 justify-center items-center home-header ml-auto mr-auto  ">
          <div className="flex flex-col md:flex md:flex-row md:gap-14 font-bold exo-2">
            <p className="text-center text-4xl md:text-5xl">Д Ъ Л Б О К А Т А </p>
            <p className="text-center text-4xl md:text-5xl">Д Ъ Р Ж А В А</p>
          </div>
          <p className="text-center text-3xl font-light ui-sans-serif">
            Където различните мнения имат своето място.
          </p>
          <p className="text-center text-xl font-light max-w-3xl">
            Подкастът &quot;Дълбоката държава&quot; е Алтернативният подкаст. Тук ще чуете за теми,
            които не се споменават в мейнстрийма, както и за мнения, които са различни от основната
            гледна точка.
          </p>
          <a
            href="https://www.youtube.com/@user-zn4rd8oj8i"
            className="button button-green button-header hover:bg-green-900 mb-5">
            Разбери истината
          </a>
        </section>
      </section>
      <section className="flex flex-col justify-center items-center gap-20 md:flex-row">
        <div className="item">
          <FontAwesomeIcon icon={faPodcast} className="text-6xl text-sky-400" />
          <p className="item-title">Епизоди</p>
          <p className="item-text">
            В този сайт можете да намерите всички епизоди от подкаста &quot;Дълбоката държава&quot;.
          </p>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faUserTie} className="text-6xl text-sky-400" />
          <p className="item-title">Гости</p>
          <p className="item-text">
            Tук можете да намерите всички информация относно всички, които са били гости в подкаста.
          </p>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faComments} className="text-6xl text-sky-400" />
          <p className="item-title">Форум</p>
          <p className="item-text">
            Свободно място за дискусии, където да обсъждате теми, които не се дискутират никъде
            другаде.
          </p>
        </div>
      </section>
    </main>
  );
};
