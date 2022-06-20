import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const addTextSlice = createSlice({
  name: "addText",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = state.value + action.payload;
    },
    clear: (state) => {
      state.value = "";
    },
  },
});

export const { add, clear } = addTextSlice.actions;

export default addTextSlice.reducer;
