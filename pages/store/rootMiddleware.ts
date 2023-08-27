import { api } from "./slices/api";
import { wordApi } from "./slices/word";

const rootMiddleware = [api.middleware, wordApi.middleware];

export default rootMiddleware;
