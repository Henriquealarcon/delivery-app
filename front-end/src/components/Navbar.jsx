import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
        to="/"
      >
        meu pedidos
      </Link>
      <Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="/"
      >
        perfil
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/"
      >
        sair
      </Link>
    </div>
  );
}
