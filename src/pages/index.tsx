import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import { SignUpPageForm, SignUpPageHeader } from '../components/SignUp';
import TwitterLogo from '../components/TwitterLogo';
import { GlobalPageContainer } from '../styles/globalContainer';

export default function Home() {
  return (
    <GlobalPageContainer>
      <SignUpPageHeader>
        <TwitterLogo />
      </SignUpPageHeader>
      <SignUpPageForm>
        <LoginForm />
      </SignUpPageForm>
    </GlobalPageContainer>
  );
}
