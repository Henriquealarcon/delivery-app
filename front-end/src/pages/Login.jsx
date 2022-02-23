import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { loginValidation } from '../utils/inputValidations';
import apiLogin from '../services/Apiservices';

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [hiddenOn, setHidenOn] = useState(true);
  const [redirectOn, setRedirectOn] = useState(false);

  const validatePassword = ({ target: { name, value } }) => {
    setLogin({ ...login,
      [name]: value,
    });
  };

  function handleLoginValidation() {
    const validationError = loginValidation(login).error;
    if (validationError) return true;
    return false;
  }

  const sendLogin = async (data) => {
    const notExist = 404;
    const result = await apiLogin(data);
    const { token, users } = result;
    const UserData = {
      name: users.name,
      email: users.email,
      role: users.role,
      token,
    };
    if (result === notExist) {
      setHidenOn(false);
    } else {
      localStorage.setItem('userData', JSON.stringify(UserData));
      setRedirectOn(true);
    }
  };

  return (
    <>
      <p
        data-testid="common_login__element-invalid-email"
        hidden={ hiddenOn }
      >
        invalid credential
      </p>
      <input
        name="email"
        onBlur={ validatePassword }
        type="text"
        data-testid="common_login__input-email"
      />
      <input
        name="password"
        onBlur={ validatePassword }
        type="password"
        data-testid="common_login__input-password"
      />
      <button
        disabled={ handleLoginValidation() }
        onClick={ () => sendLogin(login) }
        type="submit"
        data-testid="common_login__button-login"
      >
        login
      </button>
      <button
        type="submit"
        data-testid="common_login__button-register"
      >
        register now
      </button>
      {
        redirectOn ? <Redirect to="/costumer/products" /> : null
      }
    </>
  );
}
