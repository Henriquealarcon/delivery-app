import React, { useState } from 'react';
import { loginValidation } from '../utils/inputValidations';

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

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

  return (
    <>
      <p
        data-testid="common_login__element-invalid-email"
        display="hiden"
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
    </>
  );
}
