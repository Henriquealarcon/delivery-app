import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/customers/Products';

export default function Router() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/customer/products">
        <Products />
      </Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}
