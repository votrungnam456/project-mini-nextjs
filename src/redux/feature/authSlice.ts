import { loginList } from "@/common/contants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = { isLogin: false, isErrorLogin: false };

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TLoginAccount>) => {
      const { password, username } = action.payload;
      let temp = false;
      loginList.forEach((item) => {
        if (item.username === username && item.password === password) {
          temp = true;
          state.isLogin = true;
          state.loginInfo = { id: item.id, username }
          return;
        }
      })
      state.isErrorLogin = !temp;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
