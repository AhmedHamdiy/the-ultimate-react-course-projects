import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = { cart: [] };
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },
        IncreaseItemQuantity(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            item.totalPrice += item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity--;
            item.totalPrice -= item.unitPrice;
            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});
export const {
    addItem,
    deleteItem,
    IncreaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = () => (state) => state.cart.cart;

export const getTotalCartQuatity = () => (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = () => (state) =>
    state.cart.cart.reduce(
        (sum, item) => sum + item.quantity * item.unitPrice,
        0
    );

export const getQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.menuItemId === id)?.quantity ?? 0;
