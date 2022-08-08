import Router from 'next/router';
import React from 'react';
import FormButtonsContainer from '.';
import {
  SignUpComponentButton,
  SignUpComponentContainer,
  SignUpComponentForm,
  SignUpComponentInput,
  SignUpComponentLink,
  SignUpComponentLinkContainer,
  SignUpComponentTitle,
} from '../SignUp';

function LoginForm() {
  const redirectToRegisterPage = () => {
    Router.push('/signUp');
  };

  return (
    <SignUpComponentContainer>
      <SignUpComponentTitle>Entrar no Twitter</SignUpComponentTitle>
      <SignUpComponentForm>
        <div>
          <SignUpComponentInput type="email" placeholder="E-mail" />
        </div>
        <div>
          <SignUpComponentInput type="password" placeholder="Senha" />
        </div>
        <FormButtonsContainer>
          <SignUpComponentButton type="button">Entrar</SignUpComponentButton>
          <SignUpComponentButton isTransparent>
            Esqueceu sua senha?
          </SignUpComponentButton>
        </FormButtonsContainer>
      </SignUpComponentForm>
      <SignUpComponentLinkContainer>
        <p>Não tem uma conta?</p>
        <SignUpComponentLink type="button" onClick={redirectToRegisterPage}>
          Inscreva-se
        </SignUpComponentLink>
      </SignUpComponentLinkContainer>
    </SignUpComponentContainer>
  );
}

export default LoginForm;
