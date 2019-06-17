import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactList from './components/ContactList/ContactList';
import ContactDetail from './components/ContactDetail/ContactDetail';

import useContacts from './hooks/useContacts';
import { findById } from './utils/findById';

import './App.css';

const App = () => {
  const contacts = useContacts();

  const handleFavorite = (id) => {
    const item = findById(contacts, id);
    item.isFavorite = !item.isFavorite;
    console.log(item.isFavorite);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <ContactList contacts={contacts} />}
          />
          <Route
            path='/:id'
            render={({ match, }) => (
              <ContactDetail
                handleFavorite={handleFavorite}
                contact={findById(contacts, match.params.id)}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
