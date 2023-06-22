import { configureStore } from "@reduxjs/toolkit"
import cartReducer  from '../features/CartSlice.js'
import NavigationReducer from "../features/NavigationSlice.js"
const store = configureStore({
    reducer : {
        cart : cartReducer,
        navigation : NavigationReducer
    }
})

export default store