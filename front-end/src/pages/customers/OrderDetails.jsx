import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import socket from '../../utils/socketClient';
import getSaleById from '../../services/ApiSalesService';

export default function OrderDetails() {
  const [sale, setSale] = useState([]);
  const [names, setNames] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const get = async () => {
      const { id } = params;
      const response = await getSaleById(id);
      setSale(response);
      setNames(response.seller.name);
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

  const datId = 'customer_order_details__element-order';
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
          data-testid={ `${datId}-details-label-seller-name` }
        >
          {names}
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
          data-testid="customer_order_details__button-delivery-check"
          value="Entregue"
          onClick={ (e) => changeStatus(e) }
          disabled={ sale.status !== 'Em Trânsito' }
        >
          Marcar como entregue
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
      <p data-testid="customer_order_details__element-order-total-price">
        {
          `Total: ${Number(sale.totalPrice)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        }
      </p>
    </div>
  );
}
