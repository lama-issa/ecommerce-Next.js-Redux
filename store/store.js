import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer'; // استدعاء reducer الكارت

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
