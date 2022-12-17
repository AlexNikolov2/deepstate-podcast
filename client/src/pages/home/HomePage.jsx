import { faComments, faPodcast, faUserTie } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/img/home-header.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-5">
      <section>
        <img src={image} alt="opa opa adolf h*tler pak na fronta" className="image-header" />
        <section className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col md:flex md:flex-row md:gap-14 font-bold ">
            <p className="text-center text-4xl md:text-6xl">Д Ъ Л Б О К А Т А </p>
            <p className="text-center text-4xl md:text-6xl">Д Ъ Р Ж А В А</p>
          </div>
          <p className="text-center text-3xl font-light">
            Където различните мнения имат своето място.
          </p>
          <a
            href="https://www.youtube.com/@user-zn4rd8oj8i"
            className="button button-green button-header hover:bg-green-900">
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
