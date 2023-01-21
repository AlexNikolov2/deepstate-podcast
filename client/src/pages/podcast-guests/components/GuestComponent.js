import image from '../../assets/img/sasho-negara.jpg';

export const GuestComponent = () => {
  return (
    <section id="guest" className="flex items-center justify-center gap-3 flex-col">
      <img src={image} alt="" className="rounded-full w-[256px] border-[14px]" />
      <p className="text-4xl font-bold">Александър Стойчев</p>
      <p className="text-xl text-slate-400">Е1: Какво е Дълбоката Държава?</p>
    </section>
  );
};
