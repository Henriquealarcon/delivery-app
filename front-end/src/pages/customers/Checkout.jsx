import React, { useState /* useEffect */ } from 'react';
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

export default function Checkout() {
  const products = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));
  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice));

  const [redirect, setRedirect] = useState(false);

  const [adress, setAdress] = useState({
    deliveryAddress: '',
    deliveryNumber: '' });

  const [idOrder, setIdOrder] = useState('');

  const adrresClient = ({ value }) => {
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
      sellerId: 1,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'pendente',
      productsSold,
    };

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
            name="saler"
            id="saler"
          >
            <option value="lugar1">1</option>
            <option value="lugar2">2</option>
            <option value="lugar3">3</option>
          </select>
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ (e) => adrresClient(e.target) }
          />
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
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
