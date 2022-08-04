import React from 'react';
import RegisterForm from '../components/SignUp/RegisterForm';
import TwitterLogo from '../components/TwitterLogo';

export default function Register() {
  return (
    <div>
      <header>
        <TwitterLogo />
      </header>
      <main>
        <RegisterForm />
      </main>
    </div>
  );
}
