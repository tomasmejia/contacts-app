import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../shared/Image';
import InfoSection from './InfoSection';

import './ContactDetail.css';

const ContactDetail = ({ contact, handleFavorite }) => {
  if (contact) {
    const { name, phone, address, birthdate, emailAddress, companyName  } = contact;
    const fullAddress =
    `${address.street}, ${address.city}, ${address.state} ${address.zipCode}, ${address.country}`;

    return (
      <div className='Page'>
        <div className='Detail__section Detail__menu'>
          <Link to='/'>
            <span>&lt; Go back</span>
          </Link>
          <span
            className='Detail__favorite'
            onClick={() => handleFavorite(contact.id)}>
            {contact.isFavorite ? '★' : '☆'}
          </span>
        </div>
        <div className='Detail__section Section__content'>
          <Image
            src={contact.largeImageURL}
            alt={contact.name}
            isSmall={false}
          />
          <div className='Detail__main'>
            <h1 className='Detail__main--title'>{name}</h1>
            { companyName && <h2 className='Detail__main--company '>{companyName}</h2>}
          </div>
          <div className='Detail__info'>
            {Object.keys(phone).map((key, i) => (
              <InfoSection
                title='Phone'
                key={i}
                mainVal={phone[key]}
                optVal={key}
              />
            ))}
            { address && <InfoSection title='Address' mainVal={fullAddress} /> }
            { birthdate && <InfoSection title='Birthdate' mainVal={birthdate} /> }
            { emailAddress && <InfoSection title='Email' mainVal={emailAddress} /> }
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ContactDetail;
