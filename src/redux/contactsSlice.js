import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      state.push({ id, name, number });
    },

    deleteContact: (state, action) => {
      const id = action.payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

///////////////////////SELECTORS///////////////////////////////
export const getContacts = state => state.contacts;
