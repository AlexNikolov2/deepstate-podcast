import { EpisodeItem } from './components/EpisodeComponent';
import { useState, useEffect } from 'react';
import { parse } from 'rss-to-json';

export const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const arr = [];

    const link = 'https://anchor.fm/s/bbcba154/podcast/rss';

    await parse(link).then((response) => {
      response.items.forEach((item) => {
        arr.push(item);
      });
    });

    setEpisodes(arr);
  }, []);

  return (
    <section>
      <p>Всички епизоди</p>
      {episodes.map((episode) => {
        console.log(episode);
        return <EpisodeItem key={episode.itunes_episode} data={episode} />;
      })}
    </section>
  );
};
