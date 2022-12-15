import image from '../../assets/img/home-header.jpeg';

export const HomePage = () => {
  return (
    <main>
      <section>
        <img src={image} alt="opa opa adolf h*tler pak na fronta" />
        <section>
          <div className="flex gap-14 font-bold">
            <p className="text-6xl">Д Ъ Л Б О К А Т А </p>
            <p className="text-6xl">Д Ъ Р Ж А В А</p>
          </div>
          <p className="text-3xl font-light">Където различните мнения имат своето място.</p>
          <button>Разбери истината</button>
        </section>
      </section>
    </main>
  );
};
