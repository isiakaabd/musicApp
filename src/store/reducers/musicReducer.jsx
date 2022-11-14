import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "albums",
  initialState: {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: "",
  },

  reducers: {
    setActiveSong(state, action) {
      state.activeSong = action.payload.song;

      // if (action.payload?.data?.tracks?.hits) {
      // state.currentSongs = action.payload.data.tracks.hits;
      // } else if (action.payload?.data?.properties) {
      //   state.currentSongs = action.payload?.data?.tracks;
      // } else {
      // }

      state.currentSongs = action.payload.data;
      // state.currentIndex = action.payload.i;
      state.isActive = true;
      state.isPlaying = true;
    },
    setPlayPause(state, action) {
      state.isPlaying = action.payload;
    },
    nextSong(state, action) {
      // if (state.currentSongs[action.payload]?.track) {
      state.activeSong = state.currentSongs[action.payload];
      // }
      state.isActive = true;
      // state.currentSongs
    },
  },
});

const { reducer, actions } = dataSlice;
export const { setActiveSong, setPlayPause, nextSong } = actions;
export default reducer;
