import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "global",
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_HOST_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllSongs: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetAllSongsQuery } = api;
