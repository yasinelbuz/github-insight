import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '@/redux/usersSlice';
import themeReducer from '@/redux/theme';

import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from '@/services/users';
import { rateApi } from '@/services/rate';

export const store = configureStore({
   reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
      [rateApi.reducerPath]: rateApi.reducer,
      users: usersReducer,
      theme: themeReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware, rateApi.middleware)

})

setupListeners(store.dispatch)

