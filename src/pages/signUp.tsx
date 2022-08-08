import React from 'react';
import { SignUpContainer } from '../styles/globalContainer';
import RegisterForm from '../components/SignUp/RegisterForm';
import TwitterLogo from '../components/TwitterLogo';
import { SignUpPageForm, SignUpPageHeader } from '../components/SignUp';

export default function Register() {
  return (
    <SignUpContainer>
      <SignUpPageHeader>
        <TwitterLogo />
      </SignUpPageHeader>
      <SignUpPageForm>
        <RegisterForm />
      </SignUpPageForm>
    </SignUpContainer>
  );
}
