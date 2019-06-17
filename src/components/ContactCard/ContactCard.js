import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../shared/Image';
import './ContactCard.css';

const ContactCard = ({isFavorite, smallImageURL, name, id, companyName}) => {
  return (
    <Link className={`Card ${isFavorite ? 'favorite' : ''}`} to={id}>
      <Image src={smallImageURL} alt={name} isSmall='true' />
      { isFavorite && (<span className="Card__star" aria-label='star' role='img'>⭐</span>) }
      <div className="Card__Description">
        <p className='Card__Description--name'>{name}</p>
        { companyName && (<p className='Card__Description--company'>{companyName}</p>) }
      </div>
    </Link>
  );
};

export default ContactCard;
