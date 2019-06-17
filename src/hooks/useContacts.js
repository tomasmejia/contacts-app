import { useState, useEffect } from 'react';
import { API, PROXY } from '../config/misc';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const setFavorite = id => {
    setContacts(contacts.map(c => {
      return c.id === id ? { ...c, isFavorite: !c.isFavorite } : c;
    }))
  }

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
    fetchContacts();
  }, []);

  return {contacts, setFavorite};
}

export default useContacts;