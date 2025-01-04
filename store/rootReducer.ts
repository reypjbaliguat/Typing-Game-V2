import { combineReducers } from '@reduxjs/toolkit';
import { api } from './slices/api';
import { wordApi } from './slices/word';

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    [wordApi.reducerPath]: wordApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
