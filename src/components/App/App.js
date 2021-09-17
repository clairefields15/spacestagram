import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Hello</h1>} />
      <Route render={() => <p>Sorry that page doesn't exist</p>} />
    </Switch>
  );
};
