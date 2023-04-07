import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserCredentials, UserState } from "./types";

export const initialUserState: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<UserCredentials>) => ({
      isLogged: true,
      ...action.payload,
    }),

    logoutUser: (currentUserState) => ({
      ...initialUserState,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
