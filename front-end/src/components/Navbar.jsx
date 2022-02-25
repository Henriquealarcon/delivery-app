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
        <div>
          <p>Produtos</p>
          <p>11</p>
        </div>
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        <div>
          <p>meu pedidos</p>
          <p>12</p>
        </div>
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
        to="/customer/checkout"
      >
        sair
      </Link>
    </div>
  );
}
