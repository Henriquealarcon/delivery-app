import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { registerValidation } from '../utils/inputValidations';
import registerApi from '../services/RegisterLoginServices';

export default function RegisterUser() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const [hiddenOn, setHidenOn] = useState(true);
  const [redirectOn, setRedirectOn] = useState(false);

  const validatePassword = ({ target: { name, value } }) => {
    setRegister({ ...register,
      [name]: value,
    });
  };

  function switchDisabledButton() {
    const validationError = registerValidation(register).error;
    if (validationError) return true;
    return false;
  }

  const sendRegister = async (data) => {
    const notExist = 404;
    const result = await registerApi(data);
    if (result === notExist) {
      setHidenOn(false);
    } else {
      const { token, users } = result;
      console.log(token, users);
      const UserData = {
        name: users.name,
        email: users.email,
        role: users.role,
        token,
      };
      localStorage.setItem('registeredUser', JSON.stringify(UserData));
      setRedirectOn(true);
    }
  };

  return (
    <>
      <p
        data-testid="common_register__element-invalid_register"
        hidden={ hiddenOn }
      >
        invalid credential
      </p>
      <input
        name="name"
        onChange={ validatePassword }
        type="name"
        data-testid="common_register__input-name"
        placeholder="Insira um nome"
      />
      <input
        name="email"
        onChange={ validatePassword }
        type="text"
        data-testid="common_register__input-email"
        placeholder="Insira um e-email"
      />
      <input
        name="password"
        onChange={ validatePassword }
        type="password"
        data-testid="common_register__input-password"
        placeholder="Insira uma senha"
      />
      <button
        type="submit"
        data-testid="common_register__button-register"
        disabled={ switchDisabledButton() }
        onClick={ () => sendRegister(register) }
      >
        register now
      </button>
      {
        redirectOn ? <Redirect to="/customer/products" /> : null
      }
    </>
  );
}
