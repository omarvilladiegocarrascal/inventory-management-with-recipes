import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'GUEST' | 'OWNER' | 'ROOT';
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
  userFiles?: {
    id: string;
    file: {
      id: string;
      originalName: string;
      filename: string;
      mimeType: string;
      size: number;
      path: string;
      url: string;
      createdAt: string;
    };

  }[];
}

interface UserLogin {
  access_token: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  user: User;
}

export const UserAuthSlice = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/auth/' }),
  tagTypes: ['UserAuth'],
  endpoints: (builder) => ({
    loginUser: builder.mutation<UserLogin, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'login',
        method: 'POST',
        body: { email, password },
      }),
      transformResponse: (response: UserLogin) => response,
    }),
  }),
})


export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/users/' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'User' as const, id })), 'User']
          : ['User'],
    }),
    createUser: builder.mutation<User, { name: string; email: string; password: string; file?: File | null | undefined }>({
      query: ({ name, email, password, file }) => {
        const formData = new FormData();
        if (file) {

          formData.append('file', file);
        }
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        return {
          url: 'create',
          method: 'POST',
          body: formData,
        };
      },
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: User) => response,
      // Pick out errors and prevent nested properties in a hook or selector
      // transformErrorResponse: (
      //   response: { status: string | number },
      //   meta,
      //   arg,
      // ) => response.status,
      // invalidatesTags: ['User'],
      // onQueryStarted is useful for optimistic updates
      // The 2nd parameter is the destructured `MutationLifecycleApi`
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry },
      ) {},
      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        },
      ) {},
    }),
  }),
});


export const { useGetUsersQuery, useCreateUserMutation } = userApiSlice;
export const { useLoginUserMutation } = UserAuthSlice;
