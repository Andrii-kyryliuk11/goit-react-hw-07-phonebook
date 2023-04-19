import { createSlice, createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) =>
      (state = { ...state, items: action.payload }),
    [fetchContacts.rejected]: (state, action) =>
      (state = { ...state, error: action.payload }),
    [fetchContacts.pending]: (state, action) =>
      (state = { ...state, isLoading: false }),
    [deleteContact.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [deleteContact.fulfilled]: (state, action) =>
      (state = { ...state, isLoading: false }),
    [addContact.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [addContact.fulfilled]: (state, action) =>
      (state = { ...state, isLoading: false }),
  },
});
// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });
// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: true,
//   [fetchContacts.fulfilled]: false,
//   [fetchContacts.rejected]: false,
// });

// const error = createReducer(null, {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
//   [fetchContacts.pending]: null,
// });
// export default combineReducers({
//   items,
//   isLoading,
//   error,
// });
