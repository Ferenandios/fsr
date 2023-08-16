import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "../features/photos.slice";

export const store = configureStore({
  reducer: {
    photos: photosSlice
  }
})