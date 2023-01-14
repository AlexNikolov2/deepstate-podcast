/* eslint-disable react/prop-types */

import { format } from 'date-fns';

export const EpisodeItem = ({ data }) => {
  return (
    <section className="flex flex-col gap-5 justify-center items-center content-center text-center">
      <img src={data.itunes_image.href} alt="" className="w-32" />
      <p>{data.title}</p>
      <p>{data.description}</p>
      <div id="info">
        <p>{format(new Date(data.created), 'dd MMM yyyy')}</p>
        <p>Времетраене: {data.itunes_duration}</p>
      </div>
    </section>
  );
};
