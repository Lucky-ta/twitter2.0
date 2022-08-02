import React from 'react';

function LoginForm() {
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
        <span>Inscreva-se</span>
      </div>
    </div>
  );
}

export default LoginForm;
