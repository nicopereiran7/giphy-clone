import { createSlice } from "@reduxjs/toolkit";
import { getArtistGifs } from "../../../api/giphy.api";

export const artistGifsSlice = createSlice({
  name: "artistGifs",
  initialState: {
    artistGifs: null
  },
  reducers: {
    setArtistGifs: (state, action) => {
      state.artistGifs = action.payload;
    }
  }
});

export const { setArtistGifs } = artistGifsSlice.actions;

export default artistGifsSlice.reducer;

export const fetchArtistGifs = () => async (dispatch) => {
  const response = await getArtistGifs();
  dispatch(setArtistGifs(response.data));
}