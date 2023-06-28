// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { GlobalStyle } from '../GlobalStyle';
import { Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Layout } from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, filterContact} from 'redux/contactsSlice';
import { getFilterValue, setFilter } from 'redux/filterSlice';

// const LS_KEY = 'contacts';

export default function App() {
  //  const [contacts, setContacts] = useState(() => {
  //     return JSON.parse(localStorage.getItem(LS_KEY)) ?? "";
  // });

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const  contacts  = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  
  
  const dispatch = useDispatch();


  // useEffect(() => {
  //   const savedContacts = localStorage.getItem(LS_KEY);
  //   if (savedContacts !== null) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     setContacts(parsedContacts);
  //     return;
  //   }
    
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // function formSubmitHandle(name, number) {
  //   const isDuplicateName = contacts.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );

  //   if (isDuplicateName) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     // const contact = {
  //     //   id: nanoid(),
  //     //   name: name,
  //     //   number: number,
  //     // };

  //     // dispatch(prevStateContacts => [contact, ...prevStateContacts]);
  //     dispatch(addContact(name, number));
  //   }
  // }

  const changeFilter = evt => {
    // return setFilter(evt.currentTarget.value);
    return dispatch(setFilter(evt.currentTarget.value));
  };

  const getFilteredContacts = (filter, contacts) => {
    // const normalizedFilter = filter.toLowerCase();
    if (filter) {
      // return contacts.filter(contact =>
      //   contact.name.toLowerCase().includes(normalizedFilter)
      // );
      return dispatch(filterContact(filter.toLowerCase()))
    } else {
      return contacts;
    }
  };

  // const deleteContact = contactId => {
  //   dispatch(prevStateContacts =>
  //     prevStateContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filteredContacts={getFilteredContacts(filter, contacts)}
        onDelete={()=>dispatch(deleteContact())}
      />
    </Layout>
  );
}
