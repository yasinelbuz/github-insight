import { createSlice } from '@reduxjs/toolkit'
import { githubApi } from '@/services/githubUser';

const initialState = {
   searchUser: "yasinelbuz",
   items: [],
   page: 1,
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setSearchUser: function (state, action) {
         state.searchUser = action.payload;
         state.items = [];
         state.page = 1;
      },
      setItems: function (state, action) {
         state.items = action.payload;
      },
      setPage: function (state, action) {
         state.page += action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(
         githubApi.endpoints.getGithubUserByFollowers.matchFulfilled,
         (state, action) => {
            state.items = [...state.items, ...action.payload];
         }
      );
   },
})

// Action creators are generated for each case reducer function
export const { setSearchUser, setItems, setPage } = usersSlice.actions

export default usersSlice.reducer