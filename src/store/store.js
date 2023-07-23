import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photosSlice from "./photos/photos.slice";

const reducers = combineReducers({
  photos: photosSlice,
})

export const store = configureStore({
  reducer: reducers,
})