import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../shared/Image';
import InfoSection from './InfoSection';

import './ContactDetail.css';

const ContactDetail = ({ contact, handleFavorite }) => {
  if (contact) {
    const { phone, address } = contact;
    return (
      <div className='page'>
        <div className='Detail__section Detail__menu'>
          <Link to='/'>
            <span>&lt; Go back</span>
          </Link>
          <span
            className='Detail__favorite'
            onClick={() => handleFavorite(contact.id)}>
            {contact.isFavorite ? '⭐' : '🌠'}
          </span>
        </div>
        <div className='Detail__section content'>
          <Image
            src={contact.largeImageURL}
            alt={contact.name}
            isSmall={false}
          />
          <div className="Detail__main">
            <h1 className="Detail__main--title">{contact.name || ''}</h1>
            <p className="Detail__main--company ">{contact.companyName || ''}</p>
          </div>
          <div>
            {Object.keys(phone).map((key, i) => <InfoSection key={i} number={phone[key]} value={key} />)}
          </div>
          <div>
          {Object.values(address).map((key, i) => {
            let sentence = '';
            sentence += ` ${key}`;
            return sentence;
          })}
          </div>
          <div>
            <h3>{contact.birthdate || ''}</h3>
          </div>
          <div>
            <h3>{contact.emailAddress || ''}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ContactDetail;
