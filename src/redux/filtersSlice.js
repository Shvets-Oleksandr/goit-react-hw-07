import { createSlice } from '@reduxjs/toolkit';

const slise = createSlice({
  name: 'contacts',

  initialState: {
    name: '',
  },

  reducers: {
    setFilterContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = state => state.contacts.name;

export const { setFilterContact } = slise.actions;
export default slise.reducer;
