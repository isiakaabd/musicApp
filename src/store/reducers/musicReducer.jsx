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
      state.activeSong = action.payload;

      // if (action.payload?.data?.tracks?.hits) {
      // state.currentSongs = action.payload.data.tracks.hits;
      // } else if (action.payload?.data?.properties) {
      //   state.currentSongs = action.payload?.data?.tracks;
      // } else {
      //   state.currentSongs = action.payload.data;
      // }

      // state.currentIndex = action.payload.i;
      state.isActive = true;
      state.isPlaying = true;
    },
    setPlayPause(state, action) {
      state.isPlaying = action.payload;
    },
  },
});

const { reducer, actions } = dataSlice;
export const { setActiveSong, setPlayPause } = actions;
export default reducer;
