import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: TCartList[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TProduct>) => {
      if (state.items.length === 0) {
        console.log("a");
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("b");
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.items.push({ ...action.payload, quantity: 1 });
        } else {
          state.items[index].quantity += 1;
        }
      }
    },
    removeItem: (state, action: PayloadAction<TProduct>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
