import { EpisodeItem } from './components/EpisodeComponent';
import { useState, useEffect } from 'react';
import { parse } from 'rss-to-json';

export const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const arr = [];

    const link = 'https://anchor.fm/s/bbcba154/podcast/rss';

    parse(link).then((response) => {
      response.items.forEach((item) => {
        arr.push(item);
      });
    });

    setEpisodes(arr);
  }, []);

  return (
    <section>
      <p>Всички епизоди</p>
      {episodes.forEach((episode) => {
        console.log(episode);
        return <EpisodeItem key={episodes[episode]} data={episode} />;
      })}
    </section>
  );
};
