import reducer from "../reducers";
import { SET_ROCK_SONGS } from "../actionTypes";
import mockSongData from "../../helpers/mock-data";

test("rockSongs reducer should return default state if no songData supplied", () => {
  expect(reducer(undefined, {})).toEqual({ rockSongs: { songData: {} } });
});

test("rockSongs reducer should return updated state if songData supplied", () => {
  const songData = mockSongData;
  expect(
    reducer(undefined, {
      type: SET_ROCK_SONGS,
      payload: { songData }
    })
  ).toEqual({ rockSongs: { songData } });
});
