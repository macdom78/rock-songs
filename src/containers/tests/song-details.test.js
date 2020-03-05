import React from "react";
import { render } from "@testing-library/react";
import { SongDetails } from "../SongDetails";
import mockSongData from "../../helpers/mock-data";

jest.mock("../../redux/selectors", () => ({
  getRockSongById: () => mockSongData.results[0]
}));

test("`SongDetails` renders with all the correct song details", () => {
  const { getByText } = render(<SongDetails song={mockSongData.results[0]} />);

  expect(getByText("Rock")).toBeInTheDocument();
});
