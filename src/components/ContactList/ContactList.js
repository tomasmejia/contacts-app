import React from 'react';

import ContactCard from '../ContactCard/ContactCard';

import { sortStringAsc } from '../../utils/sortStringsAsc';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  const sortedContacts = contacts.sort((a, b) => sortStringAsc(a, b));
  return (
    <div className='page'>
      <div className='section menu'><h3>Contacts</h3></div>
      <div className='section header'>
        <h1>Favorite contacts </h1>
      </div>
      <div className='section content'>
        {sortedContacts
          .filter(contact => contact.isFavorite)
          .map((contact) => (
            <ContactCard
              isFavorite={contact.isFavorite}
              id={contact.id}
              key={contact.id}
              name={contact.name}
              companyName={contact.companyName}
              smallImageURL={contact.smallImageURL}
            />
          ))}
      </div>
      <div className='section header'>
        <h1>Other contacts </h1>
      </div>
      <div className='section content'>
        {sortedContacts
          .filter(contact => !contact.isFavorite)
          .map((contact) => (
            <ContactCard
              isFavorite={contact.isFavorite}
              id={contact.id}
              key={contact.id}
              name={contact.name}
              companyName={contact.companyName}
              smallImageURL={contact.smallImageURL}
            />
          ))}
      </div>
    </div>
  );
};

export default ContactList;
