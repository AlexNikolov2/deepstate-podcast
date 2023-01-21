import image from '../../assets/img/sasho-negara.jpg';

export const GuestPage = () => {
  return (
    <section id="guest-page">
      <p>Гостите на подкаста</p>
      <p>Това са всички хора, които са били гости в подкаста &quot;Дълбоката държава&quot;</p>
      <div
        id="guest-items"
        className="flex flex-col md:flex-row gap-16 justify-center items-center">
        <div id="guest" className="flex items-center justify-center gap-3 flex-col">
          <img src={image} alt="" className="rounded-full w-[256px] border-[14px]" />
          <p className="text-[30px] md:text-4xl font-bold text-center">Александър Стойчев</p>
          <p className="text-xl text-slate-400">Е1: Какво е Дълбоката Държава?</p>
        </div>
        <div id="guest" className="flex items-center justify-center gap-3 flex-col">
          <img src={image} alt="" className="rounded-full w-[256px] border-[14px]" />
          <p className="text-4xl font-bold">Александър Стойчев</p>
          <p className="text-xl text-slate-400">Е1: Какво е Дълбоката Държава?</p>
        </div>
        <div id="guest" className="flex items-center justify-center gap-3 flex-col">
          <img src={image} alt="" className="rounded-full w-[256px] border-[14px]" />
          <p className="text-4xl font-bold">Александър Стойчев</p>
          <p className="text-xl text-slate-400">Е1: Какво е Дълбоката Държава?</p>
        </div>
      </div>
    </section>
  );
};
