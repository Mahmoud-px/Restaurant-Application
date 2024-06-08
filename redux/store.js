import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


export const store = configureStore({
    reducer: {
        data: cartSlice,
    }
})

export default store