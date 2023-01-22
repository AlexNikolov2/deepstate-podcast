import image from '../../assets/img/sasho-negara.jpg';

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
        <div id="guest" className="flex items-center justify-center gap-3 flex-col">
          <img src={image} alt="" className="rounded-full w-[256px] border-[14px]" />
          <p className="text-[30px] md:text-4xl font-bold text-center">Александър Стойчев</p>
          <p className="text-xl text-center">Е1: Какво е Дълбоката Държава?</p>
        </div>
        <div id="guest" className="flex items-center justify-center gap-3 flex-col">
          <img src={image} alt="" className="rounded-full w-[256px] border-[14px]" />
          <p className="text-[30px] md:text-4xl font-bold text-center">Александър Стойчев</p>
          <p className="text-xl text-center">Е1: Какво е Дълбоката Държава?</p>
        </div>
        <div id="guest" className="flex items-center justify-center gap-3 flex-col">
          <img src={image} alt="" className="rounded-full w-[256px] border-[14px]" />
          <p className="text-[30px] md:text-4xl font-bold text-center">Александър Стойчев</p>
          <p className="text-xl text-center">Е1: Какво е Дълбоката Държава?</p>
        </div>
      </div>
    </section>
  );
};
