import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../shared/Image';
import './ContactCard.css';

const ContactCard = props => {
  return (
    <Link className={`Card ${props.isFavorite ? 'favorite' : ''}`} to={props.id}>
      <Image src={props.smallImageURL} alt={props.name} isSmall='true' />
      <div className="Card__Description">
        <p className='Card__Description--name'>
          {' '}
          {props.isFavorite ? (
            <span aria-label='star' role='img'>
              ⭐
            </span>
          ) : (
            ''
          )}{' '}
          {props.name}
        </p>
        {props.companyName ? (
          <p className='Card__Description--company'>{props.companyName}</p>
        ) : null}
      </div>
    </Link>
  );
};

export default ContactCard;
