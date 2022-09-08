import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React, { useState } from 'react';
import FormButtonsContainer from '.';
import { signInUser, UserCredentialsShape } from '../../services/userApi';
import {
  redirectToHomePage,
  redirectToSignUpPage,
} from '../../utils/redirectFunctions';
import Loading from '../Loading/Loading';
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
  const router = useRouter();
  const [isRender, setIsRender] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [credentials, setCredentials] = useState<UserCredentialsShape>();
  const handleFormData = ({ target }: any) => {
    setCredentials({
      ...credentials,
      [target.id]: target.value,
    });
  };

  const userLogin = async (userCredentials: UserCredentialsShape) => {
    setIsRender(false);
    setErrorMessage('');
    const response = await signInUser(userCredentials);
    if (response.message) {
      setIsRender(true);
      setErrorMessage('Usuário inválido');
    } else {
      setCookie(null, 'userToken', response, {
        maxAge: 86400 * 7,
        path: '/',
      });

      setIsRender(true);
      redirectToHomePage(router);
    }
  };

  return isRender ? (
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
        <SignUpComponentLink
          type="button"
          onClick={() => redirectToSignUpPage(router)}
        >
          Inscreva-se
        </SignUpComponentLink>
      </SignUpComponentLinkContainer>
    </SignUpComponentContainer>
  ) : (
    <Loading />
  );
}

export default LoginForm;
