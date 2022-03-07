import styled from 'styled-components';

export const MainChekoutDiv = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
width:80%;
height:800px;
justify-content: space-around;
align-items: stretch;
`;

export const TotalDiv = styled.div`
  background-color: #036b52; /* Green */
  border-radius:15px;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 45px;
  padding: 8px;
  width: 20%;
  height: 60px;
  margin:10px;
  margin-left: auto !important;
`;

export const AddressDiv = styled.div`
border: 1px solid green;
`;
