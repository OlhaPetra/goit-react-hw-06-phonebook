import React from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <main>
      <h1 className="Title">Phonebook</h1>
      <ContactForm />
      <h2 className="Title">Contacts</h2>
      <div className="Contacts">
        <ContactList />
      </div>
    </main>
  );
}
