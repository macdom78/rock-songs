import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { setRockSongs } from "../../redux/actions";
import { fetchHelper } from "../../helpers/fetch-helper";
import { SongsList } from "../SongsList";
import mockSongData from "../../helpers/mock-data";

jest.mock("../../helpers/fetch-helper", () => ({
  fetchHelper: jest.fn().mockImplementation(() => Promise.resolve(mockSongData))
}));

jest.mock("../../redux/actions", () => ({
  setRockSongs: jest.fn()
}));

afterEach(() => {
  jest.resetAllMocks();
});

test("`SongsList` renders with all the songs", async () => {
  const { container, getByText } = await render(
    <SongsList songData={mockSongData} setRockSongs={setRockSongs} />
  );

  expect(container.children[0].children[0].children).toHaveLength(3);
  expect(getByText("Guns N' Roses")).toBeInTheDocument();
});

test("`SongsList` does not display any songs if none returned from fetch", async () => {
  const { container, getByText } = await render(
    <SongsList songData={{ rockSongs: {} }} setRockSongs={setRockSongs} />
  );

  expect(container.children[0].children[0].children).toHaveLength(0);
});

test("`SongsList` makes call to fetch-helper", async () => {
  const { getByText } = await render(
    <SongsList
      navigate={{}}
      songData={mockSongData}
      setRockSongs={setRockSongs}
    />
  );

  await waitForElement(() => getByText("Rock"));

  expect(fetchHelper.mock.calls).toHaveLength(1);
  expect(fetchHelper).toHaveBeenCalledWith({
    url: "https://itunes.apple.com/search?term=rock&media=music",
    navigate: {}
  });
});

test("`SongsList` to send data to redux store after fetching", async () => {
  const { getByText } = await render(
    <SongsList songData={mockSongData} setRockSongs={setRockSongs} />
  );

  await waitForElement(() => getByText("Rock"));

  expect(setRockSongs.mock.calls).toHaveLength(1);
});
