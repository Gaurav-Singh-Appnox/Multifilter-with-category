import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = bookSlice.actions;
export default bookSlice.reducer;
