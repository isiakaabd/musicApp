import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// VITE_API_KEY=
// VITE_HOST_URL =
export const api = createApi({
  reducerPath: "global",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "a02a9dc12dmshab76ffd99bfea9cp161102jsn96cd4da1db1f"
      );
      // import.meta.env.VITE_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllSongs: builder.query({ query: () => "/charts/world" }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetAllSongsQuery,
  useGetSongsBySearchQuery,
  useLazyGetSongsBySearchQuery,
  useLazyGetAllSongsQuery,
} = api;
