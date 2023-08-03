import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      if (state.length == 0) {
        state.push(action.payload);
      } else {
        if (state.findIndex((item) => item.id === action.payload) === -1) {
          state.push(action.payload);
        } else {
          let index = state.map((item) => {
            return item.id === action.payload;
          });
          state.splice(index, 1);
        }
      }
    },
    removeFavorite: (state, action) => {
      return (state = state.filter((item) => item.id != action.payload));
    },
  },
});

export const { addToFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
