import API from "@/helpers/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface AuthState {
    loading: boolean;
    userInfo: object; // for user object
    userToken: string | null | any; // for storing the JWT
    error: string | null | any;
    success: boolean; // for monitoring the registration process.
}

// Initial state
const initialState: AuthState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

interface UserInputValue {
    username: string;
    email: string;
    password: string;
}

export const registerUser = createAsyncThunk(
    "auth/register",
    async (
        { username, email, password }: UserInputValue,
        { rejectWithValue }
    ) => {
        try {
            API.register.register(username, email, password);
        } catch (error: object | any) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.success = false;
                state.error = payload;
            });
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
