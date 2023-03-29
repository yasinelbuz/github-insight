import { createSlice } from '@reduxjs/toolkit'
import { usersApi } from '@/services/users';

const initialState = {
   searchUser: "yasinelbuz",
   followers: [],
   page: 1,
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setSearchUser: function (state, action) {
         state.searchUser = action.payload;
         state.followers = [];
         state.page = 1;
      },
      setItems: function (state, action) {
         state.followers = action.payload;
      },
      setPage: function (state, action) {
         state.page += action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(
         usersApi.endpoints.getGithubUserByFollowers.matchFulfilled,
         (state, action) => {
            state.followers = [...state.followers, ...action.payload];
         }
      );
   },
})

// Action creators are generated for each case reducer function
export const { setSearchUser, setItems, setPage } = usersSlice.actions

export default usersSlice.reducer