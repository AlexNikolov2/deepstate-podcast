/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

export const EpisodeItem = ({ data }) => {
  return (
    <section className="flex flex-col gap-7 justify-center content-center text-center">
      <div className="flex items-center gap-3">
        <img src={data.itunes_image.href} alt="" className="w-32" />
        <p className="text-3xl font-bold">{data.title}</p>
      </div>
      <div id="info" className="flex justify-around items-center">
        <p className="text-xl">
          <b>Времетраене:</b> {data.itunes_duration}
        </p>

        <a href={data.link}>
          <FontAwesomeIcon
            icon={faHeadphones}
            className="bg-white text-black text-4xl rounded-full p-5"
          />
        </a>
      </div>
    </section>
  );
};
