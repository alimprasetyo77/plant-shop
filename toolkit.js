/* eslint-disable no-unused-vars */
import toolkit from '@reduxjs/toolkit'
const {configureStore, createAction, createReducer} = toolkit

const addToCart = createAction("ADD_TO_CART")
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})
const store = configureStore({
    reducer : {
        cart : cartReducer,
    },
});
console.log(`ON CREATE STORE${store.getState()}`)
store.subscribe(() => {
    console.log(`STORE CHANGE : ${store.getState()}`)
})
store.dispatch(addToCart({id : 1, qty : 10}))
store.dispatch(addToCart({id : 2, qty : 20}))