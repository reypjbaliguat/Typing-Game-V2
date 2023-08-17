import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
    image: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<Partial<AuthState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { SET_USER } = authSlice.actions;
export default authSlice.reducer;
