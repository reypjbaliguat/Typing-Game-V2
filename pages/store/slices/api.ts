import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
    prepareHeaders: async (headers) => {
      const session = await getSession();
      if (session?.user)
        headers.set("Authorization", `Bearer ${session?.user?.access_token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Score", "User"],
});
