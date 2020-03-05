import { SET_ROCK_SONGS } from "../actionTypes";

const initialState = {
  songData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCK_SONGS: {
      const { songData } = action.payload;
      return {
        ...state,
        songData
      };
    }
    default:
      return state;
  }
};
