import { EpisodeItem } from './components/EpisodeComponent';
// import { useState } from 'react';
import { getAllEpisodes } from './services/episodeService';

export const EpisodePage = () => {
  // const [episodes, setEpisodes] = useState();

  console.log(getAllEpisodes());

  return <EpisodeItem />;
};
