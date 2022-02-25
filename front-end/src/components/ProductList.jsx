import React, { useState, useEffect } from 'react';
import getProducts from '../services/apiCalls';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await getProducts();
      setProducts(response.message);
    };
    get();
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
