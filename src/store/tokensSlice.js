import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokensData: (state, action) => {
      state.data = action.payload;
    },
    sortTokensByPrice: (state, action) => {
      let isSortedDesc = action.payload;
      let tempData = [...state.data];
      if (isSortedDesc) {
        tempData.sort((a, b) => a.quote.USD.price - b.quote.USD.price);
      } else if (!isSortedDesc) {
        tempData.sort((a, b) => b.quote.USD.price - a.quote.USD.price);
      }
      state.data = tempData;
    },
    sortTokensByPriceChange: (state, action) => {
      let isSortedDesc = action.payload;
      let tempData = [...state.data];
      if (isSortedDesc) {
        tempData.sort(
          (a, b) =>
            a.quote.USD.percent_change_1h - b.quote.USD.percent_change_1h
        );
      } else if (!isSortedDesc) {
        tempData.sort(
          (a, b) =>
            b.quote.USD.percent_change_1h - a.quote.USD.percent_change_1h
        );
      }
      state.data = tempData;
    },
  },
});

export const { setTokensData, sortTokensByPrice, sortTokensByPriceChange } =
  tokenSlice.actions;
export const selectData = (state) => state.tokens.data;
export default tokenSlice.reducer;
