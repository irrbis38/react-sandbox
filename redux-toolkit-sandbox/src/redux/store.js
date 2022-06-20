import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import addTextReducer from "./addTextSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addText: addTextReducer,
  },
});
