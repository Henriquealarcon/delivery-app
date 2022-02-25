import React, { useState, useEffect } from 'react';
import getProducts from '../services/apiCalls';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const response = getProducts();
    setProducts(response);
  }, []);

  return (
    <div>

      {
        products.map((product, index) => (
          <ProductCard
            key={ index }
            product={ product }
          />
        ))
      }
    </div>
  );
}
