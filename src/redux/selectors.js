export const getRockSongById = (songData, trackId) =>
  songData.results.find(song => song.trackId == trackId) || {};
