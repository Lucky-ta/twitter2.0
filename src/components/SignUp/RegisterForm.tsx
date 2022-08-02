import React from 'react';

function SignUpForm() {
  return (
    <div>
      <h1>Entre hoje mesmo para o Twitter</h1>
      <form>
        <div>
          <input type="text" placeholder="Nome" />
        </div>
        <div>
          <input type="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="password" placeholder="Senha" />
        </div>
        <div>
          <button type="button">Registrar</button>
        </div>
      </form>
      <div>
        <p>Já tem uma conta?</p>
        <span>Entrar</span>
      </div>
    </div>
  );
}

export default SignUpForm;
