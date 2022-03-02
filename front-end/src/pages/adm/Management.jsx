import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { registerValidation } from '../../utils/inputValidations';
import registerApi from '../../services/AdminRegisterServices';

export default function Management() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const validatePassword = ({ target: { name, value } }) => {
    setRegister({ ...register,
      [name]: value,
    });
  };
  const [hiddenOn, setHiddenOn] = useState(true);

  function switchDisabledButton() {
    const validationError = registerValidation(register).error;
    if (validationError) return true;
    return false;
  }

  const sendRegister = async (data) => {
    const notExist = 404;
    const result = await registerApi(data);
    if (result === notExist) {
      setHiddenOn(false);
    }
  };

  return (
    <div>
      <Navbar />
      <p
        hidden={ hiddenOn }
      >
        Something went wrong
      </p>
      <input
        name="name"
        onChange={ validatePassword }
        type="text"
        data-testid="admin_manage__input-name"
        placeholder="Nome e sobrenome"
      />
      <input
        name="email"
        onChange={ validatePassword }
        type="text"
        data-testid="admin_manage__input-email"
        placeholder="E-mail"
      />
      <input
        name="password"
        onChange={ validatePassword }
        type="password"
        data-testid="admin_manage__input-password"
        placeholder="Insira sua senha"
      />
      <select
        name="role"
        onChange={ validatePassword }
        data-testid="admin_manage__select-role"
      >
        <option value="customer">Cliente</option>
        <option value="seller">Vendedor</option>
        <option value="administrator">Admin</option>
      </select>
      <button
        disabled={ switchDisabledButton() }
        onClick={ () => sendRegister(register) }
        type="submit"
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
    </div>
  );
}
