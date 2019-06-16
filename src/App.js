import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ContactList from './components/ContactList/ContactList';
import ContactDetail from './components/ContactDetail/ContactDetail';

import useContacts from  './hooks/useContacts'
import { findById } from './utils/findById';


import './App.css';

const App = () => {
  const contacts = useContacts();
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() => (<ContactList contacts={contacts} />)} />
        <Route path="/:id" render={({match}) => <ContactDetail contact={findById(contacts, match.params.id)} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
