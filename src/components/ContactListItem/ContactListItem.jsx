import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { ButtonAddDeleteContact } from 'components/ContactForm/ContactForm.styled';
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deletedContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <ListItem key={contact.id}>
        {contact.name}: {contact.number}
        <ButtonAddDeleteContact onClick={deletedContact}>
          Delete
        </ButtonAddDeleteContact>
      </ListItem>
    </>
  );
};
ContactListItem.propTypes = {
  contact:  PropTypes.object.isRequired,
  
};
