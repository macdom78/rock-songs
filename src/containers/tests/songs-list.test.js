import React from "react";
import { render } from "@testing-library/react";
import jsonp from "jsonp";
import { setRockSongs } from "../../redux/actions";
import { SongsList } from "../SongsList";
import mockSongData from "../../helpers/mock-data";

const navigate = jest.fn();

jest.mock("jsonp");

jest.mock("../../redux/actions", () => ({
  setRockSongs: jest.fn()
}));

test("`SongsList` renders with all the songs", () => {
  jsonp.mockImplementationOnce((url, opt, cb) => cb(null, mockSongData));

  const { container, getByText } = render(
    <SongsList
      navigate={navigate}
      songData={mockSongData}
      setRockSongs={setRockSongs}
    />
  );

  expect(setRockSongs).toHaveBeenCalledWith(mockSongData);
  expect(container.children[0].children[0].children).toHaveLength(3);
  expect(getByText("Guns N' Roses")).toBeInTheDocument();
});

test("`SongsList` reroutes to error page if error from jsonp call", async () => {
  jsonp.mockImplementationOnce((url, opt, cb) => cb("404", {}));
  render(
    <SongsList
      navigate={navigate}
      songData={{ rockSongs: {} }}
      setRockSongs={setRockSongs}
    />
  );

  expect(navigate).toHaveBeenCalledWith("/error");
});
