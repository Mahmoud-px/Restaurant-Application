import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) =>{
            state.items = state.items.filter(pizza => pizza.id !== action.payload.id)
        },
        // removeMeow: (state, action) =>{
        //     state.items = 
        // }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer