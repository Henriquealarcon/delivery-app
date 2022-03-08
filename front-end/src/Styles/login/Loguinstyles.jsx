import styled from 'styled-components';

export const LoguinDiv = styled.div`
border: 1px solid black;
box-shadow: 0 0 1em #00000099;
width: 400px;
height: 400px;
position: absolute;
top: 25%;
left: 0; right: 0;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
   p {
     color: red;
   }
`;

export const Inputs = styled.input`
  display:flex;
  flex-direction: column;
  width: 95%;
  height: 50px;
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
`;

export const ButonsSend = styled.button`
border-style: none;
width: 50%;
height: 50px;
border-radius: 10px;
font-size: 30px;
color: white;
background-color: #00ffbf;
:hover {
  background-color: white;
  color: #00ffbf;
  border: 2px solid #00ffbf;
}
`;

export const ButonsRegister = styled.button`
border-style: none;
border: 2px solid #00ffbf;
width: 100%;
height: 50px;
border-radius: 10px;
font-size: 30px;
color: white;
background-color: #00ffbf;
:hover {
  background-color: white;
  color: #00ffbf;
  border: 2px solid #00ffbf;
}
`;
