import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ContactList from './components/ContactList/ContactList';
import ContactDetail from './components/ContactDetail/ContactDetail';

import useContacts from './hooks/useContacts';
import { findById } from './utils/findById';

import './App.css';

const App = () => {
  const { contacts, setFavorite } = useContacts();
  return (
    <BrowserRouter>
      <Route
        path='/'
        exact
        render={() => <ContactList contacts={contacts} />}
      />
      <Route
        path='/:id'
        render={({ match }) => (
          <ContactDetail
            handleFavorite={setFavorite}
            contact={findById(contacts, match.params.id)}
          />
        )}
      />
    </BrowserRouter>
  );
};

export default App;
