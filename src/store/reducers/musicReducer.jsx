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
    isActiveState: 0,
    display: false,
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
      state.currentIndex = action.payload.index;
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
      state.currentIndex = action.payload;
      state.isActive = true;
      // state.currentSongs
    },
    previousSong(state, action) {
      state.activeSong = state.currentSongs[action.payload];

      state.isActive = true;
      state.currentIndex = action.payload;
      // state.currentSongs
    },
    activeIcon(state, action) {
      state.isActiveState = action.payload;
    },
    searchDisplay(state) {
      state.display = !state.display;
    },
  },
});

const { reducer, actions } = dataSlice;
export const {
  setActiveSong,
  activeIcon,
  setPlayPause,
  previousSong,
  nextSong,
  searchDisplay,
} = actions;
export default reducer;
