import Router from 'next/router';
import React, { useState } from 'react';
import FormButtonsContainer from '.';
import { signInUser, UserCredentialsShape } from '../../services/userApi';
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
  const [errorMessage, setErrorMessage] = useState('');

  const redirectToRegisterPage = () => {
    Router.push('/signUp');
  };

  const redirectToHomePage = () => {
    Router.push('/home');
  };

  const [credentials, setCredentials] = useState<UserCredentialsShape>();
  const handleFormData = ({ target }: any) => {
    setCredentials({
      ...credentials,
      [target.id]: target.value,
    });
  };

  const userLogin = async (userCredentials: UserCredentialsShape) => {
    setErrorMessage('');
    const response = await signInUser(userCredentials);
    if (typeof response === 'string') {
      return redirectToHomePage();
    }
    return setErrorMessage('Usuário inválido');
  };

  return (
    <SignUpComponentContainer>
      <SignUpComponentTitle>Entrar no Twitter</SignUpComponentTitle>
      <SignUpComponentForm>
        <div>
          <SignUpComponentInput
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => handleFormData(e)}
          />
        </div>
        <div>
          <SignUpComponentInput
            id="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => handleFormData(e)}
          />
        </div>
        {errorMessage.length !== 0 && <p>{errorMessage}</p>}
        <FormButtonsContainer>
          <SignUpComponentButton
            type="button"
            onClick={() => userLogin(credentials)}
          >
            Entrar
          </SignUpComponentButton>
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
