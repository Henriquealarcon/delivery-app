import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginValidation } from '../utils/inputValidations';
import apiLogin from '../services/ApiLoginServices';
import {
  LoguinDiv,
  Inputs,
  ButonsSend,
  ButonsRegister,
} from '../Styles/login/Loguinstyles';

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [hiddenOn, setHiddenOn] = useState(true);
  const [connectionOn, setConnectionOn] = useState();

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

  useEffect(() => {
    if (connectionOn) {
      history.push(setRedirectPath(connectionOn.role));
    }
  }, [connectionOn, history]);

  const sendLogin = async (data) => {
    const notExist = 404;
    const result = await apiLogin(data);
    if (result === notExist) {
      setHiddenOn(false);
    } else {
      const { token, users } = result;
      const UserData = {
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        token,
      };
      localStorage.setItem('user', JSON.stringify(UserData));
      setConnectionOn(users);
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
