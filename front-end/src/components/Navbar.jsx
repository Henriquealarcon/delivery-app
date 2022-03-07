import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import {
  NavbarDiv,
  NavBarProducs,
  NavBarOrders,
  NavBarProfile,
  NavBarCheckout,
} from '../Styles/navBarStyles/NavBarStyles';

export default function Navbar() {
  const [redirectOn, setRedirectOn] = useState(false);
  const [userName, setUserName] = useState();
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
  }, []);

  const clearAndRedirect = () => {
    localStorage.clear();
    setRedirectOn(true);
  };

  return (
    <NavbarDiv>
      { redirectOn ? <Redirect to="/login" /> : null }
      <NavBarProducs>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          <p>
            <h3>produtos</h3>
          </p>
        </Link>
      </NavBarProducs>
      <NavBarOrders>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          <p>
            <h3>meus pedidos</h3>
          </p>
        </Link>
      </NavBarOrders>
      <NavBarProfile>
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </h3>
      </NavBarProfile>
      <NavBarCheckout>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ () => clearAndRedirect() }
        >
          sair
        </button>
      </NavBarCheckout>
    </NavbarDiv>
  );
}
