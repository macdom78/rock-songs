import { SET_ROCK_SONGS } from "../actionTypes";
import * as actions from "../actions";
import mockSongData from "../../helpers/mock-data";

test("when action type is `SET_ROCK_SONGS` it should return the correct object with rockSongs in the payload", () => {
  const songData = mockSongData;
  const expectedAction = {
    type: SET_ROCK_SONGS,
    payload: { songData }
  };

  expect(actions.setRockSongs(songData)).toEqual(expectedAction);
});
