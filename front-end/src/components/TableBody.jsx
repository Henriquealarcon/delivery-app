import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ product: {
  name,
  quantity,
  price,
  subtotal,
}, index }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {subtotal.toFixed(2).replace('.', ',')}
      </td>
      <button
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        type="button"
      >
        Remover
      </button>
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
