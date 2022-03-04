import React, { useEffect, useState } from 'react';
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
  const [total, setTotal] = useState(0);

  const subtotalCartList = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));
  useEffect(() => {
    if (subtotalCartList.length === Number('11')) {
      const newTotal = subtotalCartList.reduce((acc, a) => acc + a.subtotal, 0);
      setTotal((newTotal.toFixed(2).toString().replace('.', ',')));
    }
  }, [subtotalCartList, total]);

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
              disabled={ total === '0,00' }
              onClick={ () => localStorage.setItem('total', JSON.stringify(total)) }
            >
              { total }
            </TotalButton>
          </Link>
        </StyleDivTotalPrice>
      </StyleDivProduct>
    </>
  );
}
