import { getRockSongById } from "../selectors";
import mockSongData from "../../helpers/mock-data";

test("`getRockSongById` should return empty object if no track found", () => {
  const trackId = 1111111111;
  expect(getRockSongById(mockSongData, trackId)).toEqual({});
});

test("`getRockSongById` should return song object if track found", () => {
  const trackId = 1233328913;
  expect(getRockSongById(mockSongData, trackId)).toEqual(
    mockSongData.results[0]
  );
});
