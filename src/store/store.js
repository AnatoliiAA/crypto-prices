import { configureStore } from "@reduxjs/toolkit";
import { tokenSlice } from "./tokensSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [tokenSlice.name]: tokenSlice.reducer,
    },
    devTools: true,
  });

const store = makeStore();

export default store;
