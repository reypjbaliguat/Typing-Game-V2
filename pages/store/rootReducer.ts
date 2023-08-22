import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import authSlice from "./slices/authSlice";
import wordSlice from "./slices/wordSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  word: wordSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
