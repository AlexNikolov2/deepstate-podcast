import { EpisodeItem } from './components/EpisodeComponent';
import { useState, useEffect } from 'react';
import { parse } from 'rss-to-json';

export const EpisodePage = () => {
  // const [isLoading, ]
  const [episodes, setEpisodes] = useState([]);

  // eslint-disable-next-line space-before-function-paren
  useEffect(() => {
    const arr = [];

    // eslint-disable-next-line space-before-function-paren
    const fetchEpisodes = async () => {
      const response = await parse('https://anchor.fm/s/bbcba154/podcast/rss');
      console.log(response);
      response.items.forEach((item) => {
        arr.push(item);
      });

      arr.reverse();

      setEpisodes(arr);
    };

    fetchEpisodes();
  }, []);

  return (
    <section className="episode-header pb-7">
      <p className="text-6xl font-bold text-center py-12 pb-20 mx-5">Всички епизоди</p>
      <section id="items" className="flex flex-col md:flex-row gap-10 mx-5">
        {episodes &&
          episodes.map((episode) => {
            console.log(episode);
            return <EpisodeItem key={episode.itunes_episode} data={episode} />;
          })}
      </section>
    </section>
  );
};
