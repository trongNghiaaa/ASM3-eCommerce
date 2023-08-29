import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import popupReducer from './Popup/popupSlice';
import cartReducer from './cart/cartSlice';

const store = configureStore({
    reducer: { user: userReducer, popup: popupReducer, cart: cartReducer },
});

export default store;
