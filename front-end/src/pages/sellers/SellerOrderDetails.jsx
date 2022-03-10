import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import socket from '../../utils/socketClient';
import getSaleById from '../../services/ApiSalesService';

export default function OrderDetails() {
  const [sale, setSale] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const get = async () => {
      const { id } = params;
      const response = await getSaleById(id);
      setSale(response);
      setProducts(response.products);
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('newStatus', (newStatus) => {
      setSale({ ...sale, status: newStatus });
    });
  }, [sale]);

  const changeStatus = ({ target: { value: newStatus } }) => {
    socket.emit('changeStatus', ({ status: newStatus, id: sale.id }));
  };

  const datId = 'seller_order_details__element-order';
  return (
    <div>
      <Navbar />
      <h2>
        Detalhe do pedido
      </h2>
      <div>
        <p
          data-testid={ `${datId}-details-label-order-id` }
        >
          {sale.id}
        </p>
        <p
          data-testid={ `${datId}-details-label-order-date` }
        >
          {sale.saleDate}
        </p>
        <p
          data-testid={ `${datId}-details-label-delivery-status` }
        >
          {sale.status}
        </p>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          value="Preparando"
          onClick={ (e) => changeStatus(e) }
          disabled={ sale.status !== 'Pendente' }
        >
          Preparar pedido
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          value="Em Trânsito"
          onClick={ (e) => changeStatus(e) }
          disabled={ sale.status !== 'Preparando' }
        >
          Saiu para entrega
        </button>
      </div>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>valor Unitarío</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product, index) => (
            <tr key={ index }>
              <td
                data-testid={ `${datId}-table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `${datId}-table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `${datId}-table-quantity-${index}`
                }
              >
                {product.salesProducts.quantity}
              </td>
              <td
                data-testid={ `${datId}-table-unit-price-${index}` }
              >
                {product.price.replace('.', ',')}
              </td>
              <td
                data-testid={ `${datId}-table-sub-total-${index}` }
              >
                {(Number(product.price) * (product.salesProducts.quantity))
                  .toFixed(2) }
              </td>
            </tr>
          ))
        }
      </tbody>
      <p data-testid={ `${datId}-total-price` }>
        {
          `Total: ${Number(sale.totalPrice)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        }
      </p>
    </div>
  );
}
