import { createSlice } from '@reduxjs/toolkit';

export const origenSlice = createSlice({
    name: 'misCompras',
    initialState: {
        categoria: '',
        myCart: []
    },
    reducers: {
        saveProduct: (state, action) => {

        },
        buyProduct: (state, action) => {
            state.myCart = [...state.myCart, action.payload]
        },
        returnProduct: (state, action) => {

        }
    }
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { isOpen: false },
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleCart } = cartSlice.actions;

export const { saveProduct, buyProduct, returnProduct } = origenSlice.actions