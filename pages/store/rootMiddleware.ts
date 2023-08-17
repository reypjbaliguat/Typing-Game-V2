import { api } from "./slices/api";

const rootMiddleware = [api.middleware];

export default rootMiddleware;
