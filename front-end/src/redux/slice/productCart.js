import { createSlice } from '@reduxjs/toolkit';

export const productCart = createSlice({
  name: 'productCart',
  initialState: {
    productValue: [],
  },
  reducers: {
    addPrice: (state, action) => {
      state.productValue = action.payload;
      // state.productValue = [...state.productValue, action.payload];
    },
  },
});

export const { addPrice } = productCart.actions;

export default productCart.reducer;
