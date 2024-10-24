import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./producSlice";
import bookSlice from "./bookSlice";
import applianceSlice from "./applianceSlice";
import mobileSlice from "./mobileSlice";

const store = configureStore({
  reducer: {
    productSlice,
    bookSlice,
    applianceSlice,
    mobileSlice,
  },
});

export default store;
