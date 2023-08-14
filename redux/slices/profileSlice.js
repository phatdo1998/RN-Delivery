import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firtsName: "",
  lastName: "",
  phoneNumber: "",
  image:
    "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
};

export const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfileFirtsName: (state, action) => {
      state.firtsName = action.payload;
    },
    setProfileLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setProfilePhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setProfileImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  setProfileFirtsName,
  setProfileLastName,
  setProfilePhoneNumber,
  setProfileImage,
} = profileSlice.actions;

export default profileSlice.reducer;
