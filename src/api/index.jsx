import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// VITE_API_KEY=
// VITE_HOST_URL =
export const api = createApi({
  reducerPath: "global",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_HOST_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_API_KEY);
      // );

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
} = api;
