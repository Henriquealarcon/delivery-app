import { createSlice } from '@reduxjs/toolkit';

export const productCart = createSlice({
  name: 'productCart',
  initialState: {
    subtotalCartList: [],
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
  },
});

export const { createSubtotalList, changeSubtotalList } = productCart.actions;

export default productCart.reducer;
