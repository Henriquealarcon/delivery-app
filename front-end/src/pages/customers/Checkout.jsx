import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import TableBody from '../../components/TableBody';
import {
  MainChekoutDiv,
  AddressDiv,
  TotalDiv,
} from '../../Styles/tablestyles/Checkout';
import { TableDiv } from '../../Styles/tablestyles/tableSltyles';
import TableHead from '../../components/TableHead';
import postProductsSolds from '../../services/postProductSolds';
import getSellers from '../../services/getSellers';

export default function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(2);
  const [redirect, setRedirect] = useState(false);
  const [idOrder, setIdOrder] = useState('');
  const [adress, setAdress] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
  });

  useEffect(() => {
    const getApiSelers = async () => {
      const seller = await getSellers();
      setSellers(seller);
    };
    getApiSelers();
  }, []);

  const products = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));

  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice));

  const selectSeller = ({ target: { value } }) => {
    console.log(value);
    // setSellerId(value);
  };

  const addressClient = ({ value }) => {
    setAdress({ ...adress, deliveryAddress: value });
  };

  const numberClient = ({ value }) => {
    setAdress({
      ...adress,
      deliveryNumber: value });
  };

  const finishSale = async () => {
    const { deliveryAddress, deliveryNumber } = adress;

    const productsSold = products
      .filter((product) => product.subtotal > 0)
      .map(({ id: productId, quantity }) => ({ productId, quantity }));

    const requestObj = {
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'pendente',
      productsSold,
    };
    console.log(requestObj);
    const order = await postProductsSolds(requestObj);
    setIdOrder(order.id);
    setRedirect(true);
  };

  return (
    <>
      <NavBar />
      <MainChekoutDiv>
        <h2>Finalizar pedido</h2>
        <TableDiv>
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {
              products.filter((product) => product.subtotal > 0).map((product, index) => (
                <TableBody
                  product={ product }
                  key={ index }
                  index={ index }
                />
              ))
            }
          </tbody>
        </TableDiv>
        <TotalDiv>
          Total:
          {' '}
          <div
            data-testid="customer_checkout__element-order-total-price"
          >
            {totalPrice.toFixed(2).toString().replace('.', ',')}
          </div>
        </TotalDiv>
        <AddressDiv>
          <h2>Detalhes e Endereço para Entrega</h2>
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            onChange={ selectSeller }
          >
            {
              sellers.map(({ /* id  */name }, index) => (
                <option
                  key={ index }
                  // value={ id }
                >
                  {name}
                </option>))
            }
          </select>
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ (e) => addressClient(e.target) }
          />
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            pattern="[0-9]*"
            onChange={ (e) => numberClient(e.target) }

          />
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={ () => finishSale() }
          >
            finalizar pedido
          </button>
          { redirect
            ? <Redirect to={ `/localhost:3000/customer/orders/${idOrder}` } /> : null }
        </AddressDiv>
      </MainChekoutDiv>
    </>
  );
}
