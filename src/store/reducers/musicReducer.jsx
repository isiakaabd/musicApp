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
    likes: [],
    //  localStorage.getItem("likeMusic") ||
  },

  reducers: {
    setActiveSong(state, action) {
      state.activeSong = action.payload.song;
      if (action.payload?.data?.tracks?.hits) {
        state.activeSong = action.payload.data.tracks.hits;
        // } else if (action.payload?.data?.properties) {
        //   state.currentSongs = action.payload?.data?.tracks;
        // } else {
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    setPlayPause(state, action) {
      state.isPlaying = action.payload;
    },
    nextSong(state, action) {
      if (state.currentSongs[action.payload]?.track) {
        state.currentSongs = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }
      // }
      state.currentIndex = action.payload;
      state.isActive = true;
      // state.currentSongs
    },
    previousSong(state, action) {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }
      if (state.likes.includes(state.currentSongs[action.payload])) {
      }
      state.isActive = true;
      state.currentIndex = action.payload;
    },
    activeIcon(state, action) {
      state.isActiveState = action.payload;
    },
    searchDisplay(state) {
      state.display = !state.display;
    },
    likeSong(state, action) {
      if (state?.likes.length > 0) {
        state.likes.map((item) => {
          if (item.key === action.payload.key) {
            return state.likes;
          } else state.likes = [...state.likes, action.payload];
        });
        state.currentSongs.map((item, index) => {
          if (item.key === action.payload.key) {
            alert(123);
            const currentSong = state.currentSongs[index];
            console.log(currentSong.title);
            currentSong.like = true;
          }
        });
      } else {
        state.likes = [action.payload];
      }
    },
    unlikeSong(state, action) {
      state.likes.map((item, index) => {
        if (item.key === action.payload.key) {
          state.likes.splice(index, 1);
        }
      });
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
  likeSong,
  unlikeSong,
} = actions;
export default reducer;
