import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const API_PATH = "https://api.quotable.io/random";
export const wordApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_PATH }),
  endpoints: (builder) => ({
    fetchWords: builder.query({
      query: () => "/",
    }),
  }),
});
