import React from "react";
import SongDetail from "../SongDetail";

export default {
  title: "Components/SongDetail",
  component: SongDetail
};

const defaultStory = () => {
  return <SongDetail text="A detail" />;
};

export { defaultStory };
