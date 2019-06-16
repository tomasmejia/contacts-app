import React from 'react';

import './ContactDetail.css';

const ContactDetail = ({ contact }) => {
  if (contact) {
    return (
      <div className="Contact-Detail">
        <img src={contact.largeImageURL} alt={contact.name}/>
        <h1>{contact.name}</h1>
        <h2>{contact.companyName}</h2>
      </div>
    )
  } else {
    return <div>Loading...</div>;
  }
};

export default ContactDetail;
