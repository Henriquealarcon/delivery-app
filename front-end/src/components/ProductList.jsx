import React, { useState, useEffect } from 'react';
import getProducts from '../services/apiCalls';
import ProductCard from './ProductCard';
import StyledList from '../Styles/cardsStyle/productListStyle';

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
    <StyledList>
      {
        products.map((product, index) => (
          <ProductCard
            key={ index }
            product={ product }
            data-testid={ product.id }
          />
        ))
      }
    </StyledList>
  );
}
