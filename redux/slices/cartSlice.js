import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.length == 0) {
        state.push(action.payload);
      } else {
        if (state.findIndex((item) => item.id === action.payload.id) === -1) {
          state.push(action.payload);
        } else {
          return (state = state.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ));
        }
      }
    },
    removeCart: (state, action) => {
      return (state = state.filter((item) => item.id != action.payload));
    },
    increasement: (state, action) => {
      return (state = state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      ));
    },
    decrement: (state, action) => {
      return (state = state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      ));
    },
    setLike: (state, action) => {
      state.map((item) => {
        return item.id === action.payload
          ? { ...item, like: !item.like }
          : item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeCart,
  increasement,
  decrement,
  totalPrice,
  setLike,
} = cartSlice.actions;

export default cartSlice.reducer;
