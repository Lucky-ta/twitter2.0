import React from 'react';
import { SignUpContainer } from '../styles/globalContainer';
import RegisterForm from '../components/SignUp/RegisterForm';
import TwitterLogo from '../components/TwitterLogo';
import { SignUpForm, SignUpHeader } from '../components/SignUp';

export default function Register() {
  return (
    <SignUpContainer>
      <SignUpHeader>
        <TwitterLogo />
      </SignUpHeader>
      <SignUpForm>
        <RegisterForm />
      </SignUpForm>
    </SignUpContainer>
  );
}
