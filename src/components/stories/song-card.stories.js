import React from "react";
import SongCard from "../SongCard";

export default {
  title: "Components/SongCard",
  component: SongCard
};

const song = {
  artistName: "Rock",
  trackName: "I Am Rock",
  artworkUrl100:
    "https://is5-ssl.mzstatic.com/image/thumb/Music117/v4/d8/fe/b2/d8feb259-1e17-4f18-e120-4c38557f6714/source/100x100bb.jpg",
  trackPrice: 1.29,
  releaseDate: "2005-09-06T12:00:00Z",
  trackTimeMillis: 230827,
  currency: "USD"
};

const defaultStory = () => {
  const link = {
    href: "/?path=/story/components-songcard--with-extra-details",
    text: "A Link",
    target: ""
  };
  return <SongCard song={song} link={link} />;
};

const withExtraDetails = () => {
  const link = {
    href:
      "https://music.apple.com/us/album/i-am-rock/1233327608?i=1233328913&uo=4",
    text: "A Link",
    target: "_blank"
  };
  return <SongCard song={song} extraDetails link={link} />;
};

export { defaultStory, withExtraDetails };
