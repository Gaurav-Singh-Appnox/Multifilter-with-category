import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  brands: [],
};

const applianceSlice = createSlice({
  name: "applianceSlice",
  initialState,
  reducers: {
    setColors(state, action) {
      state.colors = action.payload;
    },
    setBrands(state, action) {
      state.brands = action.payload;
    },
  },
});

export const { setColors, setBrands } = applianceSlice.actions;
export default applianceSlice.reducer;
