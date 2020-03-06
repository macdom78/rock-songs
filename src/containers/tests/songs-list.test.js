import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { setRockSongs } from "../../redux/actions";
import { SongsList } from "../SongsList";
import mockSongData from "../../helpers/mock-data";

const navigate = jest.fn();

beforeEach(() => {
  jest.mock("../../helpers/fetch-helper", () => ({
    fetchHelper: jest
      .fn()
      .mockImplementation(({ callback }) => callback(null, mockSongData))
  }));
});

jest.mock("../../redux/actions", () => ({
  setRockSongs: jest.fn()
}));

afterEach(() => {
  jest.resetAllMocks();
});

test("`SongsList` renders with all the songs", () => {
  const { container, getByText } = render(
    <SongsList
      navigate={navigate}
      songData={mockSongData}
      setRockSongs={setRockSongs}
    />
  );

  expect(container.children[0].children[0].children).toHaveLength(3);
  expect(getByText("Guns N' Roses")).toBeInTheDocument();
});

test("`SongsList` renders no songs if no data", async () => {
  const { queryByText } = render(
    <SongsList
      navigate={navigate}
      songData={{ rockSongs: {} }}
      setRockSongs={setRockSongs}
    />
  );

  expect(queryByText("Guns N' Roses")).toBeNull();
});
