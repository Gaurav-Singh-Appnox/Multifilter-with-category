import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  brands: [],
  storage: []
};

const mobileSlice = createSlice({
  name: "mobileSlice",
  initialState,
  reducers: {
    setColor(state, action) {
      state.colors = action.payload;
    },
    setBrand(state, action) {
      state.brands = action.payload;
    },
    setStorage(state, action) {
      console.log(action.payload)
      state.storage = action.payload;
    },
  },
});

export const { setColor, setBrand ,setStorage} = mobileSlice.actions;
export default mobileSlice.reducer;
