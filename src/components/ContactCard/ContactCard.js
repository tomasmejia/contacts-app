import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCard.css';

const ContactCard = (props) => {
  if (props) {
    console.log(props);
  }
  return (
    <Link hola={props.name} to={props.id} >
      <div className="Card">
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.companyName}</p>
      </div>
    </Link>
  )
}

export default ContactCard;

