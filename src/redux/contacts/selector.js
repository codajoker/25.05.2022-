import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const visibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
