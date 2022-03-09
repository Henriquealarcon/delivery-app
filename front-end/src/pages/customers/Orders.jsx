import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import getOrders from '../../services/ApiOrdersService';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await getOrders();
      setOrders(response.message);
    };
    get();
  }, []);

  return (
    <div>
      <Navbar />
      {
        orders.map((order, index) => (
          <Link
            to={ `/customer/orders/${order.id}` }
            key={ index }
          >
            <div
              key={ index }
            >
              <p data-testid={ `customer_orders__element-order-id-${order.id}` }>
                { order.id }
              </p>
              <p data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
                { order.status }
              </p>
              <p data-testid={ `customer_orders__element-order-date-${order.id}` }>
                { order.saleDate }
              </p>
              <p>
                { order.totalPrice.replace('.', ',') }
              </p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}
