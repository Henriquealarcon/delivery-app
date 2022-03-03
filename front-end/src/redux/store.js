import { configureStore } from '@reduxjs/toolkit';
import productCartReducer from './slice/productCart';

export default configureStore({
  reducer: { productCartReducer },
});
