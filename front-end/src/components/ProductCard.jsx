import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeSubtotalList,
  createSubtotalList,
  updateTotalPrice } from '../redux/slice/productCart';
import {
  DivCard,
  DivCardFooter,
  DivCardButons,
  Price } from '../Styles/cardsStyle/CardStyle';

export default function ProductCard(product) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { product: { id, name, price, url_image: urlImage } } = product;
  const subtotalCartList = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));

  const addProduct = () => {
    setCount(count + 1);
  };

  const removeProduct = () => (count > 0 ? setCount(count - 1) : null);

  useEffect(() => {
    const multiplication = count * price;

    if (subtotalCartList.length < Number('11')) {
      dispatch(createSubtotalList({
        subtotal: multiplication, id, name, price, quantity: count,
      }));
    } else {
      dispatch(changeSubtotalList({
        subtotal: multiplication, id, name, price, quantity: count,
      }));
      dispatch(updateTotalPrice());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleInputQuantity = ({ value }) => {
    setCount(Number(value));
  };

  return (
    <DivCard>
      <Price>
        <p>R$</p>
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.replace('.', ',')}
        </p>
      </Price>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ `${urlImage}` }
        alt="imagem da bebida"
      />
      <DivCardFooter>
        <p>
          <p
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </p>
        </p>
        <DivCardButons>
          <button
            onClick={ removeProduct }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
          >
            -
          </button>
          <input
            type="text"
            pattern="[0-9]*"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ (e) => handleInputQuantity(e.target) }
            value={ count }
          />
          <button
            onClick={ addProduct }
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
          >
            +
          </button>
        </DivCardButons>
      </DivCardFooter>
    </DivCard>
  );
}

ProductCard.propTypes = ({
  product: PropTypes.object,
  id: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}).isRequired;
