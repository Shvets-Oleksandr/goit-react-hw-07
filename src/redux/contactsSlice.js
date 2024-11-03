import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
    filters: {
      name: '',
    },
  },
  reducers: {
    fetchingInProgress(state) {
      state.contacts.loading = true;
    },
    fetchingSuccess(state, action) {
      state.contacts.loading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    fetchingError(state, action) {
      state.contacts.loading = false;
      state.contacts.error = action.payload;
    },
    setFilterContact(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const selectFilteredContacts = state => {
  const { items } = state.contacts.contacts;
  const filter = state.contacts.filters.name.toLowerCase();
  if (!filter) return items;
  return items.filter(contact => contact.name.toLowerCase().includes(filter));
};

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  setFilterContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;
