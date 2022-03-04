import styled from 'styled-components';

export const DivCard = styled.div`
  border: 1px solid black;
  margin: 5px;
  box-shadow: 5px 5px 5px #939393;
  width: 300px;
  height: 400px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    img{
      width: 200px;
      height: 200px;
    }
`;

export const Price = styled.div`
  display:flex;
  flex-direction: row;
`;

export const DivCardFooter = styled.div`
  background-color: #eaf1ef;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export const DivCardButons = styled.div`
  input {
    width: 50px;
    height: 25px;
    background-color: #f2f2f2;
    padding: 3px;
    border: 1px solid #000000;
    color: #333;
    border-radius: 5px;
    margin: 1px;
  }

  button {
    border: none;
    padding: 10px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: background .3s;
    background-color: #036b52;
    border-radius: 10px;
  }
`;
