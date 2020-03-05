import { SET_ROCK_SONGS } from "./actionTypes";

export const setRockSongs = songData => ({
  type: SET_ROCK_SONGS,
  payload: { songData }
});
