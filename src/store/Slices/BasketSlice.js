import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name : "basket",
    initialState : {
        products : []
    },
    reducers:{
        handleClick(state, {payload}){
            state.products = payload.product
        }

    }
})

export const selectProduct = (store)=> store.basketSlice.products

export const {handleClick} = basketSlice.actions

export default basketSlice.reducer

