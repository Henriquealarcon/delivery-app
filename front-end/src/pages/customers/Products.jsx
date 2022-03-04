
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import ProductList from '../../components/ProductList';

export default function Products() {
  const [total, setTotal] = useState(0);
  const [ disable, setDisable] = useState(false);

    /*useEffect(() => {
      let x = Number(total) > 0 ? true: false
      setDisable(x)
    },[total])*/

  const subtotalCartList = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));
  useEffect(() => {
    if (subtotalCartList.length === Number('11')) {
      const newTotal = subtotalCartList.reduce((acc, a) => acc + a.subtotal, 0);
      setTotal((newTotal.toFixed(2).toString().replace('.', ',')));
    }
  }, [subtotalCartList, total]);

  return (
    <div>
      <NavBar />
      <ProductList />
      <Link 
        data-testid="customer_products__checkout-bottom-value"
      to='/customer/checkout'>
        <button
          data-testid='customer_products__button-cart'
          disabled={ total === '0,00' ? true : false } 
        >
            { total }
        </button>
      </Link>
    </div>
  );
}
