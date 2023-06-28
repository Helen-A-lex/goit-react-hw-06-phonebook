// import { useState } from 'react';
import {
  Form,
  Label,
  Input,
  ButtonAddDeleteContact,
} from './ContactForm.styled';
import { useDispatch,useSelector} from 'react-redux';
// import { setFilter } from 'redux/filterSlice';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const  name  = useSelector((state) =>  state.contact.name );
  const number  = useSelector((state) =>  state.contact.number )
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        dispatch(addContact({ name: value }));
        break;
      case 'number':
        dispatch(addContact({ number: value }));
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // onSubmit(name, number);
    dispatch(addContact(name, number));
    // setName('');
    // setNumber('');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="user_name">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="user_tel">
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <ButtonAddDeleteContact type="submit">Add contact</ButtonAddDeleteContact>
    </Form>
  );
}