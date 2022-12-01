import image from '../../assets/img/home-header.jpeg'
import './HomePage.css'

export const HomePage = () => {
  return (
    <div>
      <section className="relative flex flex-col justify-center content-center" id="main-header">
        <img src={image} alt="" id='image' className='w-full'/>
        <div id="main-header-text">
          <h1 className="absolute left-11">Алтернативният подкаст.</h1>
          <h3>Където различните мнения имат своето място.</h3>
          <p>
            Подкастът "Дълбоката държава" има за цел да накара съвременното
            общество да се замисли относно това в какъв свят живеем. Във всеки
            епизод водещият Алекс Николов кани различни гости, с които да
            дискутират теми, които често биват отритнати от основния поток, или
            по които нашите гости имат мнение, различно от основната наратива.
          </p>
        </div>
      </section>
      <section id="main-items">
        <div id="item">
          <i></i> {/*font awesome icon */}
          <h3>Епизоди</h3>
          <p>
            В този сайт можете да намерите всички епизоди от подкаста "Дълбоката
            държава".
          </p>
        </div>
        <div id="item">
          <i></i> {/*font awesome icon */}
          <h3>Гости</h3>
          <p>
            В този сайт можете да намерите всички информация относно всички,
            които са били гости в подкаста "Дълбоката държава".
          </p>
        </div>
        <div id="item">
          <i></i> {/*font awesome icon */}
          <h3>Форум</h3>
          <p>
            Свободно място за дискусии, където да обсъждате теми, които не се
            дискутират никъде другаде.
          </p>
        </div>
      </section>
    </div>
  );
};
