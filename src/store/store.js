import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api";
import musicReducer from "./reducers/musicReducer";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    fetchMusic: musicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
