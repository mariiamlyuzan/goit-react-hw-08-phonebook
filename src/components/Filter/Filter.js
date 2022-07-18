import React from 'react';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { useTranslation } from 'react-i18next';
const Filter = () => {
  const { t } = useTranslation(['common']);
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      {t('Find contacts by name')}
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
