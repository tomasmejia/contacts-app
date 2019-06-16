import { useState, useEffect } from 'react';

const API = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';
const PROXY = 'https://cors-anywhere.herokuapp.com/';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await fetch(PROXY + API);
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchContacts()
  }, []);

  return contacts;
}

export default useContacts;