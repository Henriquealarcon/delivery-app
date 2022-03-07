import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginValidation } from '../utils/inputValidations';
import apiLogin from '../services/ApiLoginServices';
import {
  LoguinDiv,
  Inputs,
  ButonsSend,
  ButonsRegister,
} from '../Styles/login/Loguin.styles';

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [hiddenOn, setHiddenOn] = useState(true);

  const history = useHistory();

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

  const setRedirectPath = (role) => {
    if (role === 'administrator') return '/admin/manage';
    if (role === 'seller') return '/seller/products';
    return '/customer/products';
  };

  const sendLogin = async (data) => {
    const notExist = 404;
    const result = await apiLogin(data);
    if (result === notExist) {
      setHiddenOn(false);
    } else {
      const { token, users } = result;
      const UserData = {
        name: users.name,
        email: users.email,
        role: users.role,
        token,
      };
      localStorage.setItem('user', JSON.stringify(UserData));
      const path = setRedirectPath(users.role);
      history.push(path);
      return UserData;
    }
  };

  return (
    <LoguinDiv>
      <p
        data-testid="common_login__element-invalid-email"
        hidden={ hiddenOn }
      >
        invalid credential
      </p>
      <div>
        <Inputs
          name="email"
          onChange={ validatePassword }
          type="text"
          data-testid="common_login__input-email"
          placeholder="Insira seu e-mail"
        />
        <Inputs
          name="password"
          onChange={ validatePassword }
          type="password"
          data-testid="common_login__input-password"
          placeholder="Insira sua senha"
        />
      </div>
      <ButonsSend
        disabled={ handleLoginValidation() }
        onClick={ () => sendLogin(login) }
        type="submit"
        data-testid="common_login__button-login"
      >
        login
      </ButonsSend>
      <Link to="/register">
        <ButonsRegister
          type="submit"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </ButonsRegister>
      </Link>
    </LoguinDiv>
  );
}
