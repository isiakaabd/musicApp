import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const API_KEY = import.meta.env.VITE_API_KEY;
const website = import.meta.env.VITE_HOST_URL;
import axios from "axios";
// const val = useSelector((state) => state.value);
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": website,
  },
};

const url =
  "https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=30";

const getString = (data) => {
  let is = "";
  const arr = data?.data?.album.tracks.items;

  arr?.map((i) => {
    const uris = i?.track.uri.split(":")[2] + ",";
    is += uris;
  });
  return is.slice(0, -1);
};
export const getURI = createAsyncThunk("albums/uri", async (_, thunkAPI) => {
  // return fetch(url, options)
  //   .then((res) => res.json())
  //   .catch((err) => console.error(err));
  try {
    const data = await axios(url, options);
    return data.data;
  } catch (error) {
    return error.message;
  }
});
export const fetchAlbums = createAsyncThunk(
  "albums/data",
  async (_, thunkAPI) => {
    let uri = thunkAPI.getState().fetchMusic?.albumURI?.uri;

    const url2 = `https://spotify23.p.rapidapi.com/tracks/?ids=${uri}`;
    try {
      const data = await axios(url2, options);
      return data.data;
    } catch (error) {
      return error.message;
    }
  }
);
const getAlbumDetails = (details) => {
  return details?.tracks?.map((i) => {
    const {
      album: { images, uri, artists, name, release_date },
      preview_url,
      duration_ms,
    } = i;
    return {
      image: images[0],
      uri,
      artists,
      name,
      release_date,
      preview_url,
      duration: duration_ms,
    };
  });
};
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

  // extraReducers: {
  //   [getURI.pending]: (state) => {
  //     state.albumURI.isLoading = true;
  //   },
  //   [getURI.fulfilled]: (state, action) => {
  //     state.albumURI.isLoading = false;
  //     state.albumURI.uri = getString(action.payload);
  //   },
  //   [getURI.rejected]: (state, action) => {
  //     state.albumURI.isLoading = false;
  //     state.albumURI.error = action.payload;
  //   },
  //   [fetchAlbums.pending]: (state) => {
  //     state.albums.isLoading = true;
  //   },
  //   [fetchAlbums.fulfilled]: (state, action) => {
  //     state.albums.album = action.payload;
  //     state.albums.albumDetails = getAlbumDetails(action.payload);
  //     state.albums.isLoading = false;
  //   },
  //   [fetchAlbums.rejected]: (state, action) => {
  //     state.albums.error = action.payload;
  //     state.albums.isLoading = false;
  //   },
  // },
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
