import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});
export const { setFilter } = filterSlice;
export const filterReducer = filterSlice.reducer;
////////////////////////SELECTORS///////////////////
export const getFilterValue = state => {
  return state.filter;
};
console.log(getFilterValue);
