import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '@/redux/usersSlice';

import { setupListeners } from '@reduxjs/toolkit/query'
import { githubApi } from '@/services/githubUser';

export const store = configureStore({
   reducer: {
      // Add the generated reducer as a specific top-level slice
      [githubApi.reducerPath]: githubApi.reducer,
      users: usersReducer
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware),
})

setupListeners(store.dispatch)

