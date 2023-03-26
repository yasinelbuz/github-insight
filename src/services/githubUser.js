
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
   reducerPath: 'githubApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
   endpoints: (build) => ({
      getGithubUserByName: build.query({
         query: (name) => `users/${name}`,
      }),
      getGithubUserByFollowers: build.query({
         query: ({ name, page }) => `users/${name}/followers?page=${page}&per_page=50`,
      }),
      getGithubUserByRepos: build.query({
         query: (name) => `users/${name}/repos?page=1&per_page=100`,
      }),
   }),
})

export const { useGetGithubUserByNameQuery, useGetGithubUserByFollowersQuery, useGetGithubUserByReposQuery } = githubApi