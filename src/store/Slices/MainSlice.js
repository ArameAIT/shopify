import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../lib/Data";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        products: Data,
    },
    reducers: {
        increaseProductCount(state, { payload }) {
            const isSelected = state.products.find((el) => el.id === payload.id);
            if (isSelected.count > 0) {
                isSelected.count--;
                isSelected.basketCount++; 
            } else {
            }
        },
        decreaseProductCount(state, { payload }) {
            const isSelected = state.products.find((el) => el.id === payload.id);
            isSelected.count++;
            isSelected.basketCount--; 
        },
    },
});

export const selectProducts = (store) => store.mainSlice.products;

export const { increaseProductCount, decreaseProductCount } = mainSlice.actions;

export default mainSlice.reducer;
