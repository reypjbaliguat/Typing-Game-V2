import { api } from "./api";
import { Score } from "@/types";

const API_PATH = "score";
export const scoreApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getScores: builder.query({
      query: () => ({
        url: `${API_PATH}/`,
      }),
    }),
    createScore: builder.mutation<Score, { body: Partial<Score> }>({
      query: ({ body }: { body: Score }) => ({
        url: `${API_PATH}/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Score"],
    }),
  }),
});

export const { useCreateScoreMutation, useGetScoresQuery } = scoreApi;
