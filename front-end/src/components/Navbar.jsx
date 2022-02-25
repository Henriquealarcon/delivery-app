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
        to="/customer/orders"
      >
        meu pedidos
      </Link>
      <div>
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          perfil
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
