import React from 'react';
import RegisterForm from '../components/SignUp/RegisterForm';
import twitter from '../public/icons/twitter.png';

export default function Register() {
  return (
    <div>
      <header>
        <img src={twitter.src} width="40px" alt="twitter logo" />
      </header>
      <main>
        <RegisterForm />
      </main>
    </div>
  );
}
