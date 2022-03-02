import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

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

  return (
    <div>
      <Navbar />
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
        // disabled={}
        // onClick={}
        type="submit"
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
    </div>
  );
}
