import { configureStore } from '@reduxjs/toolkit';
import productCart from './slice/productCart';

export default configureStore({
  reducer: { productCart },
});
