import React from "react";
import { render } from "@testing-library/react";
import SongCard from "../SongCard";

const song = {
  artistName: "Rock",
  trackName: "I Am Rock",
  artworkUrl100:
    "https://is5-ssl.mzstatic.com/image/thumb/Music117/v4/d8/fe/b2/d8feb259-1e17-4f18-e120-4c38557f6714/source/100x100bb.jpg",
  trackPrice: 1.29,
  releaseDate: "2005-09-06T12:00:00Z",
  trackTimeMillis: 61000,
  currency: "USD"
};

const link = {
  href: "an-href",
  text: "A Link",
  target: ""
};

test("renders the `SongCard` with the `ImageContainer` and `DetailsContainer`", () => {
  const { container } = render(<SongCard song={song} link={link} />);

  expect(container.children[0].children).toHaveLength(2);
});

test("renders the `SongCard` with the all the song details", () => {
  const { getByText, getByAltText } = render(
    <SongCard song={song} link={link} />
  );

  expect(getByText("Rock")).toBeInTheDocument();
  expect(getByText("I Am Rock")).toBeInTheDocument();
  expect(getByAltText("I Am Rock").closest("img")).toHaveAttribute(
    "src",
    "https://is5-ssl.mzstatic.com/image/thumb/Music117/v4/d8/fe/b2/d8feb259-1e17-4f18-e120-4c38557f6714/source/100x100bb.jpg"
  );
  expect(getByText("$1.29")).toBeInTheDocument();
  expect(getByText("A Link")).toBeInTheDocument();
  expect(getByText("A Link").closest("a")).toHaveAttribute("href", "an-href");
});

test("renders the `SongCard` with all the extra details if extraDetails is true", () => {
  const { getByText } = render(
    <SongCard song={song} link={link} extraDetails />
  );

  expect(getByText("1min(s) 1sec(s)")).toBeInTheDocument();
  expect(getByText("06/09/2005")).toBeInTheDocument();
});
