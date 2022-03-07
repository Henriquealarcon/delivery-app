import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeSubtotalList, updateTotalPrice } from '../redux/slice/productCart';
import {
  TdIten,
  TdDescription,
  TdQuantity,
  TdUnitPrice,
  TdTotalPrice,
  TdRemoveItem,
} from '../Styles/tablestyles/tableSltyles';

export default function TableBody({ product: {
  id,
  name,
  quantity,
  price,
  subtotal,
}, index }) {
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch(changeSubtotalList({
      subtotal: 0, id, name, price, quantity: 0,
    }));
    dispatch(updateTotalPrice());
  };

  return (
    <tr>
      <TdIten
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </TdIten>
      <TdDescription
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}
      </TdDescription>
      <TdQuantity
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </TdQuantity>
      <TdUnitPrice
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </TdUnitPrice>
      <TdTotalPrice
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {subtotal.toFixed(2).replace('.', ',')}
      </TdTotalPrice>
      <TdRemoveItem>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ () => removeProduct() }
        >
          Remover
        </button>
      </TdRemoveItem>
    </tr>
  );
}

TableBody.propTypes = ({
  name: PropTypes.string,
  quantity: PropTypes.string,
  price: PropTypes.string,
  subtotal: PropTypes.string,
  index: PropTypes.string,
}).isRequired;
