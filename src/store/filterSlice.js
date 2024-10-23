import { createSlice } from "@reduxjs/toolkit";
import { combinedData } from "../combinedData";

const initialState = {
  data: combinedData.flatMap((cat) => cat.products), 
  filters: {
    brand: null,
    color: null,
    storage: null,
    genre: null,
    author: null,
  },
  category: "All",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.filters.brand = action.payload;
    },
    setColor: (state, action) => {
      state.filters.color = action.payload;
    },
    setStorage: (state, action) => {
      state.filters.storage = action.payload;
    },
    setGenre: (state, action) => {
      state.filters.genre = action.payload;
    },
    setAuthor: (state, action) => {
      state.filters.author = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      console.log(state.category);
      state.filters = {
        brand: null,
        color: null,
        storage: null,
        genre: null,
        author: null,
      };
    },
    applyFilters: (state) => {
      const { brand, color, storage, genre, author } = state.filters;
      const { category } = state;

      // If category is "All", return all products
      if (category === "All") {
        state.data = combinedData.flatMap((cat) => cat.products);
        return;
      }

      const filteredData = combinedData.flatMap((cat) =>
        cat.category === category
          ? cat.products
              .filter((item) => {
                const matchesBrand = brand ? item.brand === brand : true;
                const matchesColor = color ? item.color === color : true;
                const matchesStorage = storage
                  ? item.storage === storage
                  : true;
                const matchesGenre = genre ? item.genre === genre : true;
                const matchesAuthor = author ? item.author === author : true;
                return (
                  matchesBrand &&
                  matchesColor &&
                  matchesStorage &&
                  matchesGenre &&
                  matchesAuthor
                );
              })
              .map((product) => ({ ...product, category: cat.category }))
          : []
      );

      state.data = filteredData;
    },
  },
});

// Export actions
export const {
  setBrand,
  setColor,
  setStorage,
  setGenre,
  setAuthor,
  applyFilters,
  setCategory,
} = filterSlice.actions;

// Export the reducer
export default filterSlice.reducer;
