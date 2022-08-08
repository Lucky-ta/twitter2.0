import React from 'react';
import { GlobalPageContainer } from '../styles/globalContainer';
import RegisterForm from '../components/SignUp/RegisterForm';
import TwitterLogo from '../components/TwitterLogo';
import { SignUpPageForm, SignUpPageHeader } from '../components/SignUp';

export default function Register() {
  return (
    <GlobalPageContainer>
      <SignUpPageHeader>
        <TwitterLogo />
      </SignUpPageHeader>
      <SignUpPageForm>
        <RegisterForm />
      </SignUpPageForm>
    </GlobalPageContainer>
  );
}
