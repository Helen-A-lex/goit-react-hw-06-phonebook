import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      console.log(state);
      state = action.payload;
    },
  },
});
export const { setFilter } = filterSlice;
export const filterReducer = filterSlice.reducer;
////////////////////////SELECTORS///////////////////
export const getFilterValue = state => {
  return state.filter;
};
