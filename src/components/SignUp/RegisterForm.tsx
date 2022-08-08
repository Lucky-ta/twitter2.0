import Router from 'next/router';
import React from 'react';
import {
  SignUpComponentButton,
  SignUpComponentContainer,
  SignUpComponentForm,
  SignUpComponentInput,
  SignUpComponentLink,
  SignUpComponentLinkContainer,
  SignUpComponentTitle,
} from '.';

const redirectToLoginPage = () => {
  Router.push('/');
};

function SignUpForm() {
  return (
    <SignUpComponentContainer>
      <SignUpComponentTitle>
        Entre hoje mesmo para o Twitter
      </SignUpComponentTitle>
      <SignUpComponentForm>
        <div>
          <SignUpComponentInput type="text" placeholder="Nome" />
        </div>
        <div>
          <SignUpComponentInput type="email" placeholder="E-mail" />
        </div>
        <div>
          <SignUpComponentInput type="password" placeholder="Senha" />
        </div>
        <div>
          <SignUpComponentButton type="button">Registrar</SignUpComponentButton>
        </div>
      </SignUpComponentForm>
      <SignUpComponentLinkContainer>
        <p>Já tem uma conta?</p>
        <SignUpComponentLink type="button" onClick={redirectToLoginPage}>
          Entrar
        </SignUpComponentLink>
      </SignUpComponentLinkContainer>
    </SignUpComponentContainer>
  );
}

export default SignUpForm;
