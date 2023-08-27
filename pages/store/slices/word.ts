import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_PATH = "https://api.quotable.io/random";

// Define a service using a base URL and expected endpoints
export const wordApi = createApi({
  reducerPath: "wordApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_PATH }),
  endpoints: (builder) => ({
    getWords: builder.query({
      query: () => "/",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWordsQuery } = wordApi;
