import { GuestComponent } from './components/GuestComponent';
import { useState, useEffect } from 'react';
import { data } from '../../data/guest-sample-data';

export const GuestPage = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const arr = [];
    data.forEach((i) => {
      arr.push(i);
    });

    setItem(arr);
  }, []);

  return (
    <section
      id="guest-page"
      className="flex flex-col gap-6 justify-center items-center py-5 episode-header">
      <p className="text-5xl font-bold text-center">Гостите на подкаста</p>
      <p className="text-xl text-center">
        Това са всички хора, които са били гости в подкаста &quot;Дълбоката държава&quot;
      </p>
      <div
        id="guest-items"
        className="flex flex-col md:flex-row gap-16 justify-center items-center">
        {items.map((item) => {
          console.log(item);
          return <GuestComponent key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
