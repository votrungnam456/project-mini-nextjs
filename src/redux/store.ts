import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cartSlice";
import authSlice from "./feature/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      auth: authSlice
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
