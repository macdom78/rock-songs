import React from "react";
import { connect } from "react-redux";

import { getRockSongById } from "../redux/selectors";
import Wrap from "../components/Wrap";
import SongCard from "../components/SongCard";

const SongDetails = ({ song }) => {
  const { trackViewUrl } = song;
  return (
    <Wrap>
      <SongCard
        extraDetails
        song={song}
        link={{ text: "More Details", href: trackViewUrl, target: "_blank" }}
      />
    </Wrap>
  );
};

const mapStateToProps = (state, { trackId }) => {
  const {
    rockSongs: { songData }
  } = state;
  const song = getRockSongById(songData, trackId);
  return { song };
};

export default connect(mapStateToProps)(SongDetails);
