import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCard.css';

const ContactCard = (props) => {
  return (
    <Link to={props.id} >
      <div className="Card">
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.companyName}</p>
      </div>
    </Link>
  )
}

export default ContactCard;

