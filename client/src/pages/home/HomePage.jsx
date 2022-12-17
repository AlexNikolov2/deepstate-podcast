import { faComments, faPodcast, faUserTie } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/img/home-header.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {
  return (
    <main>
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
          <button type="button" className="button button-green button-header hover:bg-green-900">
            Разбери истината
          </button>
        </section>
      </section>
      <section>
        <div id="item">
          <FontAwesomeIcon icon={faPodcast} />
          <p>Епизоди</p>
          <p>
            В този сайт можете да намерите всички епизоди от подкаста &quot;Дълбоката държава&quot;.
          </p>
        </div>
        <div id="item">
          <FontAwesomeIcon icon={faUserTie} />
          <p>Гости</p>
          <p>
            В този сайт можете да намерите всички информация относно всички, които са били гости в
            подкаста.
          </p>
        </div>
        <div id="item">
          <FontAwesomeIcon icon={faComments} className="text-2xl" />
          <p className="item-title">Форум</p>
          <p>
            Свободно място за дискусии, където да обсъждате теми, които не се дискутират никъде
            другаде.
          </p>
        </div>
      </section>
    </main>
  );
};
