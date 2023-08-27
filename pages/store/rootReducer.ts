import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import authSlice from "./slices/authSlice";
import wordSlice from "./slices/wordSlice";
import { wordApi } from "./slices/word";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [wordApi.reducerPath]: wordApi.reducer,
  auth: authSlice,
  word: wordSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
