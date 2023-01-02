/* eslint-disable no-unused-vars */
/* eslint-disable space-before-blocks */
/* eslint-disable space-before-function-paren */
import { EpisodeItem } from './components/EpisodeComponent';
import { useState, useEffect } from 'react';

export const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);

  /* useEffect(async () => {
    const arr = [];

    const link = 'https://api.spotify.com/v1/shows/4j4UH7lzr8UJhk3MvoCpEZ/episodes';

    async function getEpisodes() {
      const response = await fetch(link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + process.env.REACT_APP_KEY
        }
      });

      return response.json();
    }

    console.log(await getEpisodes());

    setEpisodes(arr);
  }, []); */

  return (
    <section>
      <p>Всички епизоди</p>
      {<EpisodeItem />};
    </section>
  );
};
