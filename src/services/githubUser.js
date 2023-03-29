
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
   reducerPath: 'githubApi',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
   endpoints: (build) => ({
      getGithubUserByName: build.query({
         query: (name) => `users/${name}`,
      }),
      getGithubUserByFollowers: build.query({
         query: ({ name, page }) => `users/${name}/followers?page=${page}&per_page=${process.env.NEXT_PUBLIC_FOLLOWERS_PER_PAGE}`,
      }),
      getGithubUserByRepos: build.query({
         query: (name) => `users/${name}/repos?page=1&per_page=${process.env.NEXT_PUBLIC_REPOS_PER_PAGE}`,
      }),
      getRateLimit: build.query({
         query: () => `rate_limit`,
      }),
   }),
})

export const { useGetGithubUserByNameQuery, useGetGithubUserByFollowersQuery, useGetGithubUserByReposQuery, useGetRateLimitQuery } = githubApi