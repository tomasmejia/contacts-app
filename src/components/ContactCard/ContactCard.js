import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCard.css';

const ContactCard = (props) => {
  return (
    <Link to={props.id} >
      <div className="Card" >
        <p>{props.name}</p>
        <p>{props.companyName}</p>
        {props.isFavorite ? <span aria-label="star" role="img">⭐</span> : ''}
      </div>
    </Link>
  )
}

export default ContactCard;

