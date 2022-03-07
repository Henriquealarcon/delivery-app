import React, { /* useState, useEffect */ } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../components/Navbar';
import TableBody from '../../components/TableBody';
import {
  MainChekoutDiv,
  AddressDiv,
  TotalDiv,
} from '../../Styles/tablestyles/Checkout';
import { TableDiv } from '../../Styles/tablestyles/tableSltyles';
import TableHead from '../../components/TableHead';

export default function Checkout() {
  const products = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));
  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice));

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
          />
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
          />
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
          >
            finalizar pedido
          </button>
        </AddressDiv>
      </MainChekoutDiv>
    </>
  );
}
