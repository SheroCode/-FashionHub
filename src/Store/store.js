import { configureStore } from "@reduxjs/toolkit";
import { wishlistReducer } from "./wishlistSlice";

export let store = configureStore({
  reducer: {
   wishlist: wishlistReducer,
  },
});
