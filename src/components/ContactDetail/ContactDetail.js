import React from 'react';
import { Link } from 'react-router-dom';

import './ContactDetail.css';

const ContactDetail = ({ contact, handleFavorite }) => {
  if (contact) {
    console.log(contact);
    const { phone, address } = contact;
    return (
      <div className="Contact-Detail">
        <Link to="/">Go back</Link>
        <button onClick={() => handleFavorite(contact.id)}>
          Is Favorite?
        </button>
        <span>{contact.isFavorite ? 'True' : 'False'}</span>
        <img src={contact.largeImageURL} alt={contact.name} />
        <h1>{contact.name || ''}</h1>
        <h2>{contact.companyName || ''}</h2>
        <div>
          <h3>{phone.home || ''}</h3>
          <h3>{phone.work || ''}</h3>
          <h3>{phone.mobile || ''}</h3>
        </div>
        <div>
          <h3>{address.street || ''}</h3>
          <h3>{address.city || ''}, {address.state || ''} {address.zipCode | ''}, {address.country || ''}</h3>
        </div>
        <div>
          <h3>{contact.birthdate || ''}</h3>
        </div>
        <div>
          <h3>{contact.emailAddress || ''}</h3>
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>;
  }
};

export default ContactDetail;
