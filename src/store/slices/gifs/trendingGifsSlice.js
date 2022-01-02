import { createSlice } from "@reduxjs/toolkit";
import { getTrendingGifs } from "../../../api/giphy.api";

export const trendingGifsSlice = createSlice({
  name: "trendingGifs",
  initialState: {
    list: null
  },
  reducers: {
    setTredingGifs: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setTredingGifs } = trendingGifsSlice.actions;

export default trendingGifsSlice.reducer;

export const fetchTrendingGifs = () => async (dispatch) => {
  const response = await getTrendingGifs();
  dispatch(setTredingGifs(response.data));
}