import styled from 'styled-components';

export const NavbarDiv = styled.p`
  color: white;
  top: 0 !important;
  position: relative !important;
  width: 100%;
  height: 100%;
    a {
      color: white;
      text-decoration: none;
    }
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

export const NavBarProducs = styled.p`
  background-color: #2fc18c;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

export const NavBarOrders = styled.p`
  background-color: #036b52;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

export const NavBarProfile = styled.p`
  background-color: #421891;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

export const NavBarCheckout = styled.p`
  width: 10%;
  background-color: #056cf9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;
