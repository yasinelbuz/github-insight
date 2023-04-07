import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isOpenMobileMenu: false,
}

export const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      setOpenMobileMenu: function (state, action) {
         state.isOpenMobileMenu = action.payload;
      },
   }
})

// Action creators are generated for each case reducer function
export const { setOpenMobileMenu } = themeSlice.actions

export default themeSlice.reducer