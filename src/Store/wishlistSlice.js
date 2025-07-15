import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.wishlistItems.find((item) => item.id === product.id);

      if (exists) {
        // Remove from wishlist
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== product.id
        );
      } else {
        // Add to wishlist
        state.wishlistItems.push(product);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
