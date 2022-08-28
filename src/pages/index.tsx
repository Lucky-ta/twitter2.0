import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import { SignUpPageForm, SignUpPageHeader } from '../components/SignUp';
import { TweetCardPageContainer } from '../components/Tweet';
import TwitterLogo from '../components/TwitterLogo';

export default function Home() {
  return (
    <TweetCardPageContainer>
      <SignUpPageHeader>
        <TwitterLogo />
      </SignUpPageHeader>
      <SignUpPageForm>
        <LoginForm />
      </SignUpPageForm>
    </TweetCardPageContainer>
  );
}
