import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
