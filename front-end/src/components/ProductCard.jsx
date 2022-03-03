import React, { useState /* useEffect */ } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import addPrice from '../redux/slice/productCart';

export default function ProductCard(product) {
  // const dispatch = useDispatch();
  const { product: { id, name, price, url_image: urlImage } } = product;
  const [count, setCount] = useState(0);
  const addProduct = () => {
    setCount(count + 1);
  };

  const handleInputQuantity = ({ value }) => {
    setCount(Number(value));
    console.log(count);
  };
  /* useEffect(() => {
    dispatch(addPrice(count * price));
    // eslint-disable-next-line
  }, [count]);
*/
  const removeProduct = () => (count > 0 ? setCount(count - 1) : null);
  const FormatPrice = price.replace('.', ',');
  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {FormatPrice}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ `${urlImage}` }
        alt="imagem da bebida"
      />
      <div>
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
      </div>
      <button
        onClick={ removeProduct }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        -
      </button>
      <input
        type="number"
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
