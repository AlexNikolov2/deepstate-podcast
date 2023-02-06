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
      <p className="text-6xl font-bold text-center pb-5 mx-5">Всички епизоди</p>
      <p className="text-xl font-medium text-center pb-20 mx-5">
        Всички епизоди от подкаста &quot;Дълбоката държава&quot; можете да слушате чрез платформата
        Anchor.
      </p>
      <section
        id="items"
        className="flex flex-col tablet:flex-row gap-10 mx-5 flex-wrap justify-center items-center">
        {episodes &&
          episodes.map((episode) => {
            console.log(episode);
            return <EpisodeItem key={episode.itunes_episode} data={episode} />;
          })}
      </section>
    </section>
  );
};
