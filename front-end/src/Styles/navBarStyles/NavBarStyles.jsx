import styled from 'styled-components';

export const NavbarDiv = styled.div`
  color: white;
  a {
  color: white;
  text-decoration: none;
}
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;

`;

export const NavBarProducs = styled.div`
  background-color: #2fc18c;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
      h4 {
      background-color: red;
      border-radius: 50%;
    }
  }
`;

export const NavBarOrders = styled.div`
  background-color: #036b52;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
      h4 {
      background-color: red;
      border-radius: 50%;
    }
  }
`;

export const NavBarProfile = styled.div`
  background-color: #421891;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

export const NavBarCheckout = styled.div`
  width: 10%;
  background-color: #056cf9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
      h4 {
      background-color: red;
      border-radius: 50%;
    }
  }
`;
