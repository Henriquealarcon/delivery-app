import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import ProductList from '../../components/ProductList';
import {
  StyleDivProduct,
  StyleDivTotalPrice,
  TotalButton,
} from '../../Styles/productSytyle/ProductStyle';

export default function Products() {
  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice)).toFixed(2).toString().replace('.', ',');

  return (
    <>
      {' '}
      <NavBar />
      <StyleDivProduct>
        <ProductList />
        <StyleDivTotalPrice>
          <h2>ver carrinho: R$</h2>
          <Link
            data-testid="customer_products__checkout-bottom-value"
            to="/customer/checkout"
          >
            <TotalButton
              type="button"
              data-testid="customer_products__button-cart"
              disabled={ totalPrice === '0,00' }
              onClick={ () => localStorage.setItem('total', JSON.stringify(totalPrice)) }
            >
              { totalPrice }
            </TotalButton>
          </Link>
        </StyleDivTotalPrice>
      </StyleDivProduct>
    </>
  );
}
