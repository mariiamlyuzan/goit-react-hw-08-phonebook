import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';
const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  return (
    <>
      <p className={s.nameContact}>{name}:</p>
      <span className={s.numberContact}>{number}</span>
      <button
        type="button"
        className={s.buttonDelete}
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
