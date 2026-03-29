import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./definition";

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload)
            }
            state.items.push(action.payload);
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);

            if(item){
                item.quantity -= 1;
                if(item.quantity <= 0){
                    state.items = state.items.filter((item) => item.id !== action.payload)
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;