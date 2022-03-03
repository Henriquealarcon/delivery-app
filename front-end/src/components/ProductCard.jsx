import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changeSubtotalList, createSubtotalList } from '../redux/slice/productCart';

export default function ProductCard(product) {
  const subtotalCartList = useSelector(({ productCart }) => productCart.subtotalCartList);
  const dispatch = useDispatch();
  const { product: { id, title, price, url_image: urlImage } } = product;

  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount(count + 1);
  };

  const removeProduct = () => (count > 0 ? setCount(count - 1) : null);

  useEffect(() => {
    const multiplication = count * price;

    if (subtotalCartList.length < Number('11')) {
      dispatch(createSubtotalList({ subtotal: multiplication, id }));
    } else {
      dispatch(changeSubtotalList({ subtotal: multiplication, id }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

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
        src={ `${urlImage}` }
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
        readOnly
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
