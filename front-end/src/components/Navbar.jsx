import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('userData'));
    setUserName(name);
  }, []);

  return (
    <div>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Produtos
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        meu pedidos
      </Link>
      <div>
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </h3>
      </div>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/customer/logout"
      >
        sair
      </Link>
    </div>
  );
}
