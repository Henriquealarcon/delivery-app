import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/customers/Products';
import Checkout from '../pages/customers/Checkout';
import Register from '../pages/Register';
import Orders from '../pages/customers/Orders';
import Management from '../pages/adm/Management';
import SellerOrders from '../pages/sellers/SellerOrders';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" component={ Login }/>
      </Route>

      <Route exact path="/login"  component={ Login } />

      <Route exact path="/register"  component={ Register } />

      {/* essa rota precisa ser dinamica com Id do user */}
      <Route exact path="/customer/orders/"  component={ Orders } />

      <Route exact path="/customer/products"  component={ Products } />

      <Route exact path="/seller/products"  component={ SellerOrders }/>

      <Route exact path="/admin/manage" component={ Management } />

      <Route exact path="/customer/checkout" component={ Checkout } />
    </Switch>
  );
}
