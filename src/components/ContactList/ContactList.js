import React from 'react';
import { sortStringAsc } from '../../utils/sortStringsAsc';

import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({ contacts }) => {
  const sortedContacts = contacts.sort((a, b) => sortStringAsc(a, b));
  return (
    <div>
      {sortedContacts.map(contact => (<ContactCard id={contact.id} key={contact.id} name={contact.name} />))}
    </div>
  )
}

export default ContactList
