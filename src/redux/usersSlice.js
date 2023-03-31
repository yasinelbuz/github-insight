import { createSlice } from '@reduxjs/toolkit'
import { usersApi } from '@/services/users';

const initialState = {
   search: "yasinelbuz",
   followers: [],
   following: [],
   followerPage: 1,
   followingPage: 1,
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setSearch: function (state, action) {
         state.search = action.payload;
         state.followers = [];
         state.following = [];
         state.followerPage = 1;
         state.followingPage = 1;
      },
      setFollowers: function (state, action) {
         state.followers = action.payload;
      },
      setFollowing: function (state, action) {
         state.following = action.payload;
      },
      setFollowerPage: function (state, action) {
         state.followerPage += action.payload;
      },
      setFollowingPage: function (state, action) {
         state.followingPage += action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(
         usersApi.endpoints.getGithubUserByFollowers.matchFulfilled,
         (state, action) => {
            state.followers = [...state.followers, ...action.payload];
         }
      );
      builder.addMatcher(
         usersApi.endpoints.getGithubUserByFollowing.matchFulfilled,
         (state, action) => {
            state.following = [...state.following, ...action.payload];
         }
      );
   },
})

// Action creators are generated for each case reducer function
export const { setSearch, setFollowers, setFollowing, setFollowerPage, setFollowingPage } = usersSlice.actions

export default usersSlice.reducer