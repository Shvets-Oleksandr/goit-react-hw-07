import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',

  initialState: {
    name: '',
  },

  reducers: {
    setFilterContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectValueFilter = state => state.filters.name;

export const { setFilterContact } = filtersSlice.actions;
export default filtersSlice.reducer;
