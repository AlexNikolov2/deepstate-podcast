/* eslint-disable react/prop-types */

export const GuestComponent = ({ item }) => {
  return (
    <section id="guest" className="flex items-center justify-center gap-3 flex-col">
      <img src={item.img} alt="" className="rounded-full w-[256px] border-[14px]" />
      <p className="text-4xl font-bold text-center">{item.name}</p>
      <p className="text-xl font-semibold">{item.episodes}</p>
    </section>
  );
};
