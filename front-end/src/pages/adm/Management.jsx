import React from 'react';
import Navbar from '../../components/Navbar';

export default function Management() {
  return (
    <div>
      <Navbar />
      <input
        name="name"
        // onChange={}
        type="text"
        data-testid="admin_manage__input-name"
        placeholder="Nome e sobrenome"
      />
      <input
        name="email"
        // onChange={}
        type="text"
        data-testid="admin_manage__input-email"
        placeholder="E-mail"
      />
      <input
        name="password"
        // onChange={}
        type="password"
        data-testid="admin_manage__input-password"
        placeholder="Insira sua senha"
      />
      <select name="role" data-testid="admin_manage__select-role">
        <option value="customer">Cliente</option>
        <option value="seller">Vendedor</option>
        <option value="admin">Admin</option>
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
