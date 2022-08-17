import Router from 'next/router';
import React, { useState } from 'react';
import {
  SignUpComponentButton,
  SignUpComponentContainer,
  SignUpComponentForm,
  SignUpComponentInput,
  SignUpComponentLink,
  SignUpComponentLinkContainer,
  SignUpComponentTitle,
} from '.';
import { NewUserShape } from '../../services/userApi';

const redirectToLoginPage = () => {
  Router.push('/');
};

function SignUpForm() {
  const [newUser, setNewUser] = useState<NewUserShape>({
    name: '', email: '', password: '',
  });
  const handleFormData = ({ target }: any) => {
    setNewUser({
      ...newUser,
      [target.id]: target.value,
    });
  };

  const registerNewUser = async (formData: NewUserShape) => {
    console.log(formData);
  };

  const formValidate = (formData: NewUserShape) => {
    if (formData.name.length < 3 || !formData.name) {
      return true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);
    if (formData.email.length === 0 || !isEmailValid) {
      return true;
    }

    if (formData.password.length < 6 || !formData.password) {
      return true;
    } return false;
  };

  return (
    <SignUpComponentContainer>
      <SignUpComponentTitle>
        Entre hoje mesmo para o Twitter
      </SignUpComponentTitle>
      <SignUpComponentForm>
        <div>
          <SignUpComponentInput
            id="name"
            type="text"
            placeholder="Nome"
            onChange={(e: any) => handleFormData(e)}
          />
        </div>
        <div>
          <SignUpComponentInput
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e: any) => handleFormData(e)}

          />
        </div>
        <div>
          <SignUpComponentInput
            id="password"
            type="password"
            placeholder="Senha"
            onChange={(e: any) => handleFormData(e)}

          />
        </div>
        <div>
          <SignUpComponentButton
            onClick={() => registerNewUser(newUser)}
            type="button"
            disabled={formValidate(newUser)}
          >
            Registrar

          </SignUpComponentButton>
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
