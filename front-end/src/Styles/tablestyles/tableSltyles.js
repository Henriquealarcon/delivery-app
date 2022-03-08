import styled from 'styled-components';

export const TableDiv = styled.table`
height:200px;
box-shadow: 0 0 1em #00000099;
  tr {
    text-align: center;
    height: 50px;
    border-style: none;
    font-size: 25px;
  }

  button {
    color:white;
    background-color:red;
    border-style: none;
    border-radius: 5px;
    font-size: 25px;

  }
`;

export const TdIten = styled.td`
  background-color:#2fc18c;
  border-radius: 5px 0px 0px 5px;
  color:white;
  width: 5%;
`;

export const TdDescription = styled.td`
  background-color:#eaf1ef;
  width: 40%;
`;

export const TdQuantity = styled.td`
  background-color:#036b52;
  color: white;
  width: 10%;
`;

export const TdUnitPrice = styled.td`
  background-color:#421981;
  color: white;
`;

export const TdTotalPrice = styled.td`
  background-color:#056cf9;
  color: white;
`;

export const TdRemoveItem = styled.td`
  background-color:red;
  color: white;
  border-radius: 0px 5px 5px 0px;
`;
