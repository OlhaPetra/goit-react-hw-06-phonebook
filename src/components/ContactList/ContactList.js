import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import contactsActions from '../../redux/phonebook/phonebook-actions';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts) {
      return;
    }
    return contacts.filter(({ name }) =>
      name.toString().toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <>      
      <ul className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <ContactItem name={name} number={number} />
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
