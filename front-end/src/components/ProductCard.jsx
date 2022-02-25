import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard(product) {
  const { product: { id, title, price, image } } = product;
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
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
      />
      <button
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
