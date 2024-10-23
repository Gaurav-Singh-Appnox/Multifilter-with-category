import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredData = createSelector(
  (state) => state.filterSlice.data,
  (state) => state.filterSlice.filters,
  (state) => state.filterSlice.category,
  (data, filters, category) => {
    const { brand, color, storage } = filters;

    if (category === "All") {
      return data.flatMap(cat => cat.products);
    }

    return data.flatMap(cat =>
      cat.category === category ? 
        cat.products.filter(item => {
          const matchesBrand = brand ? item.brand === brand : true;
          const matchesColor = color ? item.color === color : true;
          const matchesStorage = storage ? item.storage === storage : true;
          return matchesBrand && matchesColor && matchesStorage;
        }).map(product => ({ ...product, category: cat.category })) 
      : []
    );
  }
);
