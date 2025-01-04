import { api } from './api';
import { User } from '@/types';

const API_PATH = 'auth';
export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        loginViaSocial: builder.mutation<User, { body: Partial<User> }>({
            query: ({ body }: { body: User }) => ({
                url: `${API_PATH}/login-social`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useLoginViaSocialMutation } = authApi;
