import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice';
import filterReducer from './filtersSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
