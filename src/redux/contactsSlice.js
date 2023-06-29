import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        const { name, number } = payload;
        const isDuplicateName = state.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (isDuplicateName) {
          alert(`${name} is already in contacts`);
        } else {
          const newContact = { id: nanoid(), name, number };
          return state.push(newContact);
        }
      },
      prepare(payload) {
        const { name, number } = payload;
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    filterContact(state, action) {
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload)
      );
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
///////////////////////SELECTORS///////////////////////////////
export const getContacts = state => state.contacts;
console.log(getContacts);
