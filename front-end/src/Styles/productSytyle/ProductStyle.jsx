import styled from 'styled-components';

export const StyleDivProduct = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyleDivTotalPrice = styled.p`
  background-color: #036b52;
  color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TotalButton = styled.button`
  background-color: #036b52; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
`;
