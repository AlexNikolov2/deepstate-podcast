/* eslint-disable react/prop-types */

export const EpisodeItem = ({ data }) => {
  console.log(data.title);
  return (
    <section>
      <p className="text-white">{data.title}</p>
    </section>
  );
};
