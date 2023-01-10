import { HomeItem } from './components/HomeItem';
import { useState, useEffect } from 'react';
import { data } from '../../data/item-sample-data';

export const HomePage = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const arr = [];
    data.forEach((i) => {
      arr.push(i);
    });

    setItem(arr);
  }, []);

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
        {items.map((item) => {
          console.log(item);
          return <HomeItem key={item.id} item={item} />;
        })}
      </section>
    </main>
  );
};
