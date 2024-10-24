import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../combinedData";

const initialState = {
  data: productsData,
  category: "All",
  filteredProducts: getAllProducts(productsData),
};
function getAllProducts(productsData) {
  return productsData.flatMap((category) => category.products);
}
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      console.log("category action ", action.payload);
      state.category = action.payload;
      console.log(state.category);
      if (action.payload === "All") {
        state.filteredProducts = getAllProducts(state.data);
      } else {
        const categoryData = state.data.find(
          (cat) => cat.category === action.payload
        );
        state.filteredProducts = categoryData ? categoryData.products : [];
      }
    },

  },
});
export const { setCategory } = productSlice.actions;
export default productSlice.reducer;
