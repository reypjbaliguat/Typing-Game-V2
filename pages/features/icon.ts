import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface IconState {
    iconState: String;
}

// Initial state
const initialState: IconState = {
    iconState: "moon",
};

// create a slice
export const iconSlice = createSlice({
    name: "icon",
    initialState,
    reducers: {
        // Action to set the icon
        iconMoon: (state) => {
            state.iconState = "moon";
        },
        iconSun: (state) => {
            state.iconState = "sun";
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.icon,
    //         };
    //     },
    // },
});

export const { iconMoon, iconSun } = iconSlice.actions;

export default iconSlice.reducer;
