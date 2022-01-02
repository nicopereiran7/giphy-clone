import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// REDUCERS
import trendingGifsSlice from "./slices/gifs/trendingGifsSlice";
import artistGifsSlice from "./slices/gifs/artistGifsSlice";

const reducer = combineReducers({
  trendingGifs: trendingGifsSlice,
  artistGifs: artistGifsSlice
})

export default configureStore({
  reducer
});