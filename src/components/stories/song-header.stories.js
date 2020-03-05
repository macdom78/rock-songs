import React from "react";
import SongHeader from "../SongHeader";

export default {
  title: "Components/SongHeader",
  component: SongHeader
};

const defaultStory = () => {
  return <SongHeader text="A header" />;
};

export { defaultStory };
