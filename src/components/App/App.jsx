import { GlobalStyle } from '../GlobalStyle';
import { Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Layout } from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, addContact } from 'redux/contactsSlice';
import { getFilterValue, setFilter } from 'redux/filterSlice';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const addNewContact = (name, number) => {
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicateName) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(name, number));
  };

  const changeFilter = evt => {
    return dispatch(setFilter(evt.currentTarget.value));
  };

  const getFilteredContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  const deletedContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addNewContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filteredContacts={getFilteredContacts(filter, contacts)}
        onDelete={deletedContact}
      />
    </Layout>
  );
}
