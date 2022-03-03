import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/Navbar';
import ProductList from '../../components/ProductList';

export default function Products() {
  const [total, setTotal] = useState(0);

  const subtotalCartList = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));
  useEffect(() => {
    if (subtotalCartList.length === Number('11')) {
      const newTotal = subtotalCartList.reduce((acc, a) => acc + a.subtotal, 0);
      setTotal((newTotal.toFixed(2)));
    }
  }, [subtotalCartList, total]);

  return (
    <div>
      <NavBar />
      <ProductList />
      <p>
        Total:R$
        {' '}
        { total }
      </p>
    </div>
  );
}
