import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

export default () => (
  <div>
    <Switch>
      {/* If the URL path is '/', show the home page. */}
      <Route exact path='/' component={Home}/>
    </Switch>
  </div>
);
