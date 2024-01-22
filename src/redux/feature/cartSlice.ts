import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TProduct>) => {
      if (state.items.length === 0) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
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
    changeQuantity: (state, action: PayloadAction<TChangeQuantityPayload>) => {
      const { id, quantity, typeChange } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        switch (typeChange) {
          case -1:
            if (state.items[index].quantity > 1) {
              state.items[index].quantity -= quantity;
            } else {
              state.items.splice(index, 1);
            }
            break;
          case 0:
            if(quantity !== 0){
              state.items[index].quantity = quantity;
            }else{
              state.items.splice(index, 1);
            }
            break;
          case 1:
            state.items[index].quantity += quantity;
            break;
        }
      }
    },
    // changeQuantity: (state, action: PayloadAction<TChangeQuantityPayload>) = {
    //   state
    // },
  },
});

export const { addItem, removeItem, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
