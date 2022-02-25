import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import addPrice from '../redux/slice/productCart';

export default function ProductCard(product) {
  const dispatch = useDispatch();
  const { product: { id, title, price, image } } = product;
  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount(count + 1);
    dispatch(addPrice('ola'));
  };

  /* useEffect(() => {
    dispatch(addPrice(count * price));
    // eslint-disable-next-line
  }, [count]);
*/
  const removeProduct = () => (count > 0 ? setCount(count - 1) : null);

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        preço :
        {' '}
        {price}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt="imagem da bebida"
      />
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {title}
      </p>
      <button
        onClick={ removeProduct }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ count }
      />
      <button
        onClick={ addProduct }
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = ({
  product: PropTypes.object,
  id: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}).isRequired;
