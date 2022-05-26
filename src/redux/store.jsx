// После
import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './redux-redesers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

console.log();
const persistConfigItem = {
  key: 'todo',
  storage: storage,
};
const persistedReducerItem = persistReducer(
  persistConfigItem,
  todoSlice.reducer
);

export const store = configureStore({
  reducer: {
    todos: persistedReducerItem,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
