
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
   reducerPath: 'usersApi',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
   endpoints: (build) => ({
      getGithubUserByName: build.query({
         query: (name) => `users/${name}`,
      }),
      getGithubUserByFollowers: build.query({
         query: ({ name, followerPage }) => `users/${name}/followers?page=${followerPage}&per_page=${process.env.NEXT_PUBLIC_FOLLOWERS_PER_PAGE}`,
      }),
      getGithubUserByFollowing: build.query({
         query: ({ name, followingPage }) => `users/${name}/following?page=${followingPage}&per_page=${process.env.NEXT_PUBLIC_FOLLOWING_PER_PAGE}`,
      }),
      getGithubUserByRepos: build.query({
         query: (name) => `users/${name}/repos?page=1&per_page=${process.env.NEXT_PUBLIC_REPOS_PER_PAGE}`,
      }),
   }),
})

/*while (usersApi.endpoints.getGithubUserByFollowers.select(data).hasNextPage) {
   const { data: nextPageData } = await api.endpoints.getUsers.initiate(
      usersApi.endpoints.getGithubUserByFollowers.select(data).nextPage
   );
   allUsers = [...allUsers, ...nextPageData];
}*/

export const { useGetGithubUserByNameQuery, useGetGithubUserByFollowersQuery, useGetGithubUserByFollowingQuery, useGetGithubUserByReposQuery } = usersApi