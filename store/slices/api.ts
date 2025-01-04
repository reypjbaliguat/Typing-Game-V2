import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
        prepareHeaders: async (headers) => {
            const token = JSON.parse(
                localStorage.getItem('user') as string,
            )?.token;
            headers.set('Authorization', `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['Score', 'User', 'Word'],
});
