import { GlobalStyle } from '../GlobalStyle';
import { Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Layout } from '../Layout';

export default function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Layout>
  );
}
