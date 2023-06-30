import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { ButtonAddDeleteContact } from 'components/ContactForm/ContactForm.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  
  const dispatch = useDispatch();

  return (
    <>
      <ListItem key={contact.id}>
        {contact.name}: {contact.number}
        <ButtonAddDeleteContact
          onClick={() => {
            dispatch(deleteContact(contact.id));
          }}
        >
          Delete
        </ButtonAddDeleteContact>
      </ListItem>
    </>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
