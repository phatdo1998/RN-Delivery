import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import favoriteSlice from "./slices/favoriteSlice";
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    favorite: favoriteSlice,
    profile: profileSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
