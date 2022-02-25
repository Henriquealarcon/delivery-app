import React from 'react';
import NavBar from '../../components/Navbar';
import ProductList from '../../components/ProductList';

export default function Products() {
  return (
    <div>
      <NavBar />
      <ProductList />
      <totalCart />
    </div>
  );
}
