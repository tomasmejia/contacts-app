import React from 'react';
import { sortStringAsc } from '../../utils/sortStringsAsc';

import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({ contacts }) => {
  const sortedContacts = contacts.sort((a, b) => sortStringAsc(a, b));
  return (
    <div>
      <div>
        <h1>Favorites: </h1>
        {sortedContacts
          .filter(contact => contact.isFavorite)
          .map(contact => (
            <ContactCard
              isFavorite={contact.isFavorite}
              id={contact.id}
              key={contact.id}
              name={contact.name}
            />
          ))}
      </div>
      <div>
        <h1>Contacts: </h1>
        {sortedContacts
          .filter(contact => !contact.isFavorite)
          .map(contact => (
            <ContactCard
              isFavorite={contact.isFavorite}
              id={contact.id}
              key={contact.id}
              name={contact.name}
            />
          ))}
      </div>
    </div>
  );
};

export default ContactList;
