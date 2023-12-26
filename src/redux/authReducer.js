import { createSlice } from "@reduxjs/toolkit";
import { todoAPI } from "../API/API";

const authState = {
  authMe: false,
  userId: null,
  login: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    authMe(state, action) {
      state.userId = action.payload[0]
      state.login = action.payload[2]
      state.email = action.payload[1]
      state.authMe = true
    }
  }

})

export const { authMe } = authSlice.actions;

export const loginThunk = (login, password, rememberMe) => async (dispatch) => {
  let response = await todoAPI.login(login, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(authMeThunk(response.data.data.userId, login, login));
  }
};

export const authMeThunk = () => async (dispatch) => {
  let response = await todoAPI.authMe();

  if (response.data.resultCode === 0) {
    dispatch(authMe([response.data.data.id, response.data.data.email, response.data.data.login]));
  }
};

export default authSlice.reducer;
