/* eslint-disable react/prop-types */

import { format } from 'date-fns';

export const EpisodeItem = ({ data }) => {
  return (
    <section className="flex flex-col gap-5 justify-center content-center text-center ">
      <div className="flex items-center">
        <img src={data.itunes_image.href} alt="" className="w-32" />
        <p className="text-4xl font-bold">{data.title}</p>
      </div>

      <audio src={data.link} type="audio/mp3"></audio>
      <div id="info" className="flex justify-around">
        <div>
          <p>{format(new Date(data.created), 'dd MMM yyyy')}</p>
        </div>
        <div>
          <p>
            <b>Времетраене:</b> {data.itunes_duration}
          </p>
        </div>
      </div>
    </section>
  );
};
