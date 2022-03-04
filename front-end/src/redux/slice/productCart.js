import { createSlice } from '@reduxjs/toolkit';

export const productCart = createSlice({
  name: 'productCart',
  initialState: {
    subtotalCartList: [],
    totalPrice: 0,
  },
  reducers: {
    createSubtotalList: (state, action) => {
      state.subtotalCartList = [...state.subtotalCartList, action.payload];
    },
    changeSubtotalList: (state, action) => {
      const prevTaskIndex = state.subtotalCartList
        .findIndex((subtotal) => subtotal.id === action.payload.id);
      state.subtotalCartList.splice(prevTaskIndex, 1, action.payload);
    },
    updateTotalPrice: (state) => {
      state.totalPrice = state.subtotalCartList
        .reduce((acc, a) => acc + a.subtotal, 0);
    },
  },
});

export const {
  createSubtotalList,
  changeSubtotalList,
  updateTotalPrice } = productCart.actions;

export default productCart.reducer;
