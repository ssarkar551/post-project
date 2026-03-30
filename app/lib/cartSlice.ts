import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartState } from "./definition";

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartProduct>) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id,
			);
			if (existingItem) {
				state.items = state.items.map((i) =>
					i.id === action.payload.id
						? { ...i, quantity: i.quantity + 1 }
						: i,
				);
			} else {
				state.items = [
					...state.items,
					{ ...action.payload, quantity: 1 },
				];
			}
		},
		deleteItem: (state, action: PayloadAction<string>) => {
			const item = state.items.find((i) => i.id === action.payload);

			if (!item) return;

			if (item.quantity > 1) {
				state.items = state.items.map((i) =>
					i.id === action.payload
						? { ...i, quantity: i.quantity - 1 }
						: i,
				);
			} else{
                state.items = state.items.filter(i => i.id !== action.payload);
            }
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
