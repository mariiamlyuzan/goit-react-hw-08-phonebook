import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
} from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const filterContacts = getVisibleContacts();
  return (
    <ul>
      {filterContacts?.map(contact => (
        <li key={contact.id} className={s.listContact}>
          <ContactItem {...contact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
