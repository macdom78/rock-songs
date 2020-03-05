import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setRockSongs } from "../redux/actions";
import { fetchHelper } from "../helpers/fetch-helper";
import Grid from "../components/Grid";
import SongCard from "../components/SongCard";
import Wrap from "../components/Wrap";

const SongsList = ({
  navigate,
  songData: { results: songs = [] },
  setRockSongs
}) => {
  const fetchSongData = async () => {
    const songData = await fetchHelper({
      url: "https://itunes.apple.com/search?term=rock&media=music",
      navigate
    });
    setRockSongs(songData);
  };

  useEffect(() => {
    fetchSongData();
  }, []);

  const SongCards = ({ songs }) =>
    songs.map(song => (
      <SongCard
        key={song.trackId}
        song={song}
        link={{
          text: "View",
          href: `/song/${song.trackId}`
        }}
      />
    ));

  return (
    <Wrap>
      <Grid>
        <SongCards songs={songs} />
      </Grid>
    </Wrap>
  );
};

const mapStateToProps = state => ({
  songData: state.rockSongs.songData
});

export default connect(mapStateToProps, { setRockSongs })(SongsList);
