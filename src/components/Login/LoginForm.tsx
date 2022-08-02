import Router from 'next/router';
import React from 'react';

function LoginForm() {
  const redirectToRegisterPage = () => {
    Router.push('/signUp');
  };

  return (
    <div>
      <h1>Entrar no Twitter</h1>
      <form>
        <div>
          <input type="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="password" placeholder="Senha" />
          <span>Esqueceu sua senha?</span>
        </div>
        <div>
          <button type="button">Entrar</button>
        </div>
      </form>
      <div>
        <p>Não tem uma conta?</p>
        <button type="button" onClick={redirectToRegisterPage}>Inscreva-se</button>
      </div>
    </div>
  );
}

export default LoginForm;
