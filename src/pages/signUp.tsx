import React from 'react';
import RegisterForm from '../components/SignUp/RegisterForm';
import TwitterLogo from '../components/TwitterLogo';
import { SignUpPageForm, SignUpPageHeader } from '../components/SignUp';
import { TweetCardPageContainer } from '../components/Tweet';

export default function Register() {
  return (
    <TweetCardPageContainer>
      <SignUpPageHeader>
        <TwitterLogo />
      </SignUpPageHeader>
      <SignUpPageForm>
        <RegisterForm />
      </SignUpPageForm>
    </TweetCardPageContainer>
  );
}
