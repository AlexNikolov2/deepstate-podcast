export const getAllEpisodes = () => {
  const link = 'https://api.spotify.com/v1/shows/4j4UH7lzr8UJhk3MvoCpEZ/episodes';

  fetch(link, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_KEY
    }
  })
    .then((response) => response.json())
    .then((responseData) => console.log(responseData));
};
