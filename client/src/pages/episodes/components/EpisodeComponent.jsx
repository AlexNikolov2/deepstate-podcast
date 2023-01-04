/* eslint-disable react/prop-types */
export const EpisodeItem = (item) => {
  console.log(item.item);
  return (
    <iframe
      className="rounded-xl"
      src="https://open.spotify.com/embed/episode/1RZYSmCy6IPmiRTFQUPQMo"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  );
};
