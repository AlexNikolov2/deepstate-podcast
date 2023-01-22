import { GuestComponent } from './components/GuestComponent';

export const GuestPage = () => {
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
        <GuestComponent />
      </div>
    </section>
  );
};
