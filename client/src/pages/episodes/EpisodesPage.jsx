import { EpisodeItem } from './components/EpisodeComponent';
import { useState, useEffect } from 'react';

export const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const arr = [];

    const link = 'https://api.spotify.com/v1/shows/4j4UH7lzr8UJhk3MvoCpEZ/episodes';

    fetch(link, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_KEY
      }
    })
      .then((response) => response.json())
      .then((responseData) => responseData.items.forEach((data) => arr.push(data)));

    setEpisodes(arr);
  }, []);

  return (
    <section>
      {episodes.map((item) => {
        console.log(item);
        return <EpisodeItem key={item.id} item={item} />;
      })}
    </section>
  );
};
