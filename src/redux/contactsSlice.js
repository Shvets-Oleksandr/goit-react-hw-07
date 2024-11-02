import { createSlice } from '@reduxjs/toolkit';

import initialContacts from '../contacts.json';

const slise = createSlice({
  name: 'contacts',

  initialState: {
    items: initialContacts,
  },

  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = slise.actions;
export default slise.reducer;
