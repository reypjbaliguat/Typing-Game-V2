import { api } from "./api";
import { User } from "@/types/user";

const API_PATH = "auth";
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginViaSocial: builder.mutation<User, { body: Partial<User> }>({
      query: ({ body }) => ({
        url: `${API_PATH}/login-social`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginViaSocialMutation } = authApi;
