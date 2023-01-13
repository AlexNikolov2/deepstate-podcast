/* eslint-disable react/prop-types */

export const EpisodeItem = ({ data }) => {
  return (
    <section>
      <p className="text-white">{data.title}</p>
    </section>
  );
};
