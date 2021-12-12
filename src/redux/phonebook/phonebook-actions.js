import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phonebook/Add', ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('phonebook/Delete');
const changeFilter = createAction('phonebook/ChangeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
