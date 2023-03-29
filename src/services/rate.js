
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rateApi = createApi({
   reducerPath: 'rateApi',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
   endpoints: (build) => ({
      getRateLimit: build.query({
         query: () => `rate_limit`,
      }),
   }),
})

export const { useGetRateLimitQuery } = rateApi