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
      response.items.forEach((item) => {
        arr.push(item);
      });

      setEpisodes(arr);
    };

    fetchEpisodes();

    /*  */

    // setEpisodes(fetchEpisodes());
  }, []);

  return (
    <section>
      <p>Всички епизоди</p>
      {episodes &&
        episodes.map((episode) => {
          console.log(episode);
          return <EpisodeItem key={episode.itunes_episode} data={episode} />;
        })}
    </section>
  );
};
